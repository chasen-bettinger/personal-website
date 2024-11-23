I want to create an environment where I can save my configuration within the
apps that I use across each of the different compute environments I have so that
I don't have to keep re-creating the wheel. 

https://nixcademy.com/posts/nix-on-macos/

https://nixos.org/download/

sh <(curl -L https://nixos.org/nix/install)

nix run "nixpkgs#hello"

error: experimental Nix feature 'nix-command' is disabled; add '--extra-experimental-features nix-comma
  1 experimental-features = nix-command
nd' to enable it

https://discourse.nixos.org/t/error-experimental-nix-feature-nix-command-is-disabled/18089/5

Where is the configuration.nix?
/etc/nixos/configuration.nix

Added `experimental-features = nix-command` to the configuration

https://nix.dev/manual/nix/2.18/command-ref/conf-file.html#conf-experimental-features

https://nixos.org/guides/nix-pills/
https://github.com/kamilchm/.nixpkgs/tree/main
https://www.youtube.com/watch?v=k9yKm_k5cVA
https://trude.dev/posts/nix-starter-guide/
https://nixcademy.com/posts/nixos-rebuild/
https://discourse.nixos.org/t/path-nix-store-does-not-exist/55413/4



