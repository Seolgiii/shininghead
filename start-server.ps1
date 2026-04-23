$root = "C:\Users\user\Documents\Codex\2026-04-22-new-chat"
$node = "C:\Program Files\nodejs\node.exe"

$info = [System.Diagnostics.ProcessStartInfo]::new()
$info.FileName = $node
$info.Arguments = ".\server.mjs"
$info.WorkingDirectory = $root
$info.UseShellExecute = $false
$info.CreateNoWindow = $true
$info.RedirectStandardOutput = $true
$info.RedirectStandardError = $true

$process = [System.Diagnostics.Process]::Start($info)
$process.Id
