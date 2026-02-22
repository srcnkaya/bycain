$root = 'C:\Users\serca\.openclaw\workspace\bycain-ventures\public\demos'

$style = @'
<style id="bycain-mobile-fix">
  html, body { max-width: 100%; overflow-x: hidden; }
  * { box-sizing: border-box; }
  img, video, canvas, svg, iframe { max-width: 100% !important; height: auto !important; }
  .container, [class*="container"] { max-width: 100% !important; }
  @media (max-width: 768px) {
    h1 { font-size: clamp(1.8rem, 8vw, 2.6rem) !important; line-height: 1.2 !important; }
    h2 { font-size: clamp(1.4rem, 6vw, 2rem) !important; line-height: 1.25 !important; }
    section, .section, .hero, .hero-section { padding-left: 1rem !important; padding-right: 1rem !important; }
    .grid, [class*="grid"] { grid-template-columns: 1fr !important; }
    .navbar, nav, .nav, .header { padding-left: 1rem !important; padding-right: 1rem !important; }
    .cta-button, .btn, button { max-width: 100%; white-space: normal; }
  }
</style>
'@

Get-ChildItem -Path $root -Directory | ForEach-Object {
  $index = Join-Path $_.FullName 'index.html'
  if (Test-Path $index) {
    $content = Get-Content -Raw $index
    if ($content -notmatch 'id="bycain-mobile-fix"') {
      if ($content -match '</head>') {
        $updated = $content -replace '</head>',("`r`n" + $style + "`r`n</head>")
        Set-Content -Path $index -Value $updated -NoNewline
        Write-Output "patched: $index"
      } else {
        Write-Output "skip_no_head: $index"
      }
    } else {
      Write-Output "already: $index"
    }
  }
}
