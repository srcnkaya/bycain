// ==========================================
// NEONWAVE AUDIO - Gerçek Audio Player
// HTML5 Audio API kullanarak çalışır
// ==========================================

class NeonWavePlayer {
    constructor() {
        this.players = [];
        this.currentlyPlaying = null;
        this.init();
    }

    init() {
        // DOM yüklendiğinde player'ları başlat
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializePlayers());
        } else {
            this.initializePlayers();
        }
    }

    initializePlayers() {
        // Tüm beat kartlarını bul
        const beatCards = document.querySelectorAll('.beat-card');
        
        beatCards.forEach((card, index) => {
            // Her karttaki audio elementini ve butonları bul
            const audioElement = card.querySelector('.audio-element');
            const playButton = card.querySelector('.play-button');
            const timeDisplay = card.querySelector('.time-display');
            const waveformBars = card.querySelectorAll('.waveform-bar');

            // Audio elementi yoksa atla
            if (!audioElement) {
                console.warn(`⚠️ Beat #${index + 1}: Audio elementi bulunamadı. HTML'de <audio class="audio-element"> ekleyin.`);
                return;
            }

            // Player state'i sakla
            this.players[index] = {
                audio: audioElement,
                button: playButton,
                timeDisplay: timeDisplay,
                waveformBars: waveformBars,
                isPlaying: false
            };

            // Play/Pause butonu click eventi
            playButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.togglePlay(index);
            });

            // Audio eventi: zaman güncellemesi
            audioElement.addEventListener('timeupdate', () => {
                this.updateTimeDisplay(index);
            });

            // Audio eventi: yükleme tamamlandı
            audioElement.addEventListener('loadedmetadata', () => {
                this.updateTimeDisplay(index);
                console.log(`✅ Beat #${index + 1} yüklendi: ${this.formatTime(audioElement.duration)}`);
            });

            // Audio eventi: çalma bitti
            audioElement.addEventListener('ended', () => {
                this.stop(index);
            });

            // Audio eventi: hata durumu
            audioElement.addEventListener('error', (e) => {
                console.error(`❌ Beat #${index + 1} yüklenemedi:`, audioElement.src);
                console.error('Hata:', audioElement.error);
                playButton.style.opacity = '0.5';
                playButton.style.cursor = 'not-allowed';
            });

            // İlk zaman gösterimini ayarla
            this.updateTimeDisplay(index);
        });

        console.log(`🎵 ${this.players.length} beat yüklendi`);
    }

    togglePlay(index) {
        const player = this.players[index];
        
        if (!player || !player.audio) return;

        if (player.isPlaying) {
            this.pause(index);
        } else {
            this.play(index);
        }
    }

    play(index) {
        const player = this.players[index];
        
        // Önce diğer çalan beat'leri durdur
        if (this.currentlyPlaying !== null && this.currentlyPlaying !== index) {
            this.pause(this.currentlyPlaying);
        }

        // Audio'yu oynat
        player.audio.play().catch(error => {
            console.error('Oynatma hatası:', error);
        });

        player.isPlaying = true;
        this.currentlyPlaying = index;

        // Button görünümünü değiştir
        player.button.classList.add('playing');
        player.button.innerHTML = '⏸';

        // Waveform animasyonunu başlat
        player.waveformBars.forEach(bar => {
            bar.style.animationPlayState = 'running';
        });

        console.log(`▶️ Çalıyor: Beat #${index + 1}`);
    }

    pause(index) {
        const player = this.players[index];
        
        if (!player) return;

        // Audio'yu duraklat
        player.audio.pause();
        player.isPlaying = false;

        if (this.currentlyPlaying === index) {
            this.currentlyPlaying = null;
        }

        // Button görünümünü değiştir
        player.button.classList.remove('playing');
        player.button.innerHTML = '▶';

        // Waveform animasyonunu durdur
        player.waveformBars.forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });

        console.log(`⏸ Durduruldu: Beat #${index + 1}`);
    }

    stop(index) {
        const player = this.players[index];
        
        if (!player) return;

        // Durdur ve başa sar
        player.audio.pause();
        player.audio.currentTime = 0;
        player.isPlaying = false;

        if (this.currentlyPlaying === index) {
            this.currentlyPlaying = null;
        }

        // Button görünümünü değiştir
        player.button.classList.remove('playing');
        player.button.innerHTML = '▶';

        // Waveform animasyonunu durdur
        player.waveformBars.forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });

        // Zaman gösterimini sıfırla
        this.updateTimeDisplay(index);

        console.log(`⏹ Durduruldu: Beat #${index + 1}`);
    }

    updateTimeDisplay(index) {
        const player = this.players[index];
        
        if (!player || !player.audio || !player.timeDisplay) return;

        const currentTime = player.audio.currentTime || 0;
        const duration = player.audio.duration || 0;

        // Süreleri formatla
        const currentFormatted = this.formatTime(currentTime);
        const durationFormatted = this.formatTime(duration);

        player.timeDisplay.textContent = `${currentFormatted} / ${durationFormatted}`;
    }

    formatTime(seconds) {
        if (isNaN(seconds) || seconds === Infinity) {
            return '00:00';
        }

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        
        return `${this.padZero(mins)}:${this.padZero(secs)}`;
    }

    padZero(num) {
        return num.toString().padStart(2, '0');
    }
}

// Global player instance oluştur
const neonPlayer = new NeonWavePlayer();

// ==========================================
// SATIN ALMA BUTONLARI
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const beatCard = button.closest('.beat-card');
            const beatTitle = beatCard ? beatCard.querySelector('.beat-title').textContent : `Beat #${index + 1}`;
            const beatPrice = beatCard ? beatCard.querySelector('.beat-price').textContent : '$29.99';
            
            // ⚠️ BURAYA ÖDEME SİSTEMİNİZİ BAĞLAYIN
            // Aşağıdaki alert'i kaldırıp gerçek ödeme linkini ekleyin
            
            alert(`🔥 Satın Alma: "${beatTitle}"\nFiyat: ${beatPrice}\n\n💡 Ödeme Bağlantısı:\n\n1. PayPal için:\nwindow.location.href = 'https://paypal.me/kullaniciadi/${beatPrice}';\n\n2. Stripe için:\nwindow.location.href = 'https://buy.stripe.com/your_link';\n\n3. README.md dosyasına bakın.`);
            
            console.log(`🛒 Satın alma tıklandı: ${beatTitle} - ${beatPrice}`);
            
            // ÖRNEKLERİN YORUMLARINI KALDIRIP KULLANABİLİRSİNİZ:
            
            // PayPal örneği:
            // window.location.href = `https://paypal.me/kullaniciadi/${beatPrice.replace('$', '')}`;
            
            // Stripe örneği:
            // window.location.href = 'https://buy.stripe.com/test_xxxxxxxxxxxxx';
            
            // Beatstars örneği:
            // window.location.href = 'https://www.beatstars.com/beat/your-beat-slug';
        });
    });
});
