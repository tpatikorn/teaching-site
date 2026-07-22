# Project Guidelines

## Local File System Protocol (file://) Constraint
- This teaching website is designed to run entirely serverless, loaded directly from the local file system using the `file:///` protocol.
- Do not attempt to run, route, or test pages via a local HTTP server (`localhost` / `127.0.0.1`) or inside container services.
- When validating visual designs, scripting behavior, or translations, launch pages directly in the system's default browser by calling Windows shell commands (e.g. `Start-Process "<file_path>"` in PowerShell).
