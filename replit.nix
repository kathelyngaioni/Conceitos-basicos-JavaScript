{ pkgs }: {
  deps = [
    pkgs.node objetos/aula01/aula01.js
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}