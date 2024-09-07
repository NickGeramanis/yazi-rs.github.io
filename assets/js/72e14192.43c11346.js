"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[239],{7810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var s=r(1527),d=r(6225),i=r(2537),t=r(1332);const l={sidebar_position:2,description:"A quick guide on the basic usage of Yazi."},c="Quick Start",h={id:"quick-start",title:"Quick Start",description:"A quick guide on the basic usage of Yazi.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A quick guide on the basic usage of Yazi."},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Configuration",permalink:"/docs/configuration/overview"}},a={},o=[{value:"Shell wrapper",id:"shell-wrapper",level:2},{value:"Keybindings",id:"keybindings",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Selection",id:"selection",level:3},{value:"File operations",id:"file-operations",level:3},{value:"Copy paths",id:"copy-paths",level:3},{value:"Filter files",id:"filter-files",level:3},{value:"Find files",id:"find-files",level:3},{value:"Search files",id:"search-files",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Multi-tab",id:"multi-tab",level:3},{value:"Flavors",id:"flavors",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you've ",(0,s.jsx)(n.a,{href:"/docs/installation",children:"installed Yazi"}),", start the program with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yazi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Press ",(0,s.jsx)("kbd",{children:"q"})," to quit and ",(0,s.jsx)("kbd",{children:"~"})," to open the help menu."]}),"\n",(0,s.jsx)(n.h2,{id:"shell-wrapper",children:"Shell wrapper"}),"\n",(0,s.jsxs)(n.p,{children:["We suggest using this ",(0,s.jsx)(n.code,{children:"y"})," shell wrapper that provides the ability to change the current working directory when exiting Yazi."]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(t.Z,{value:"bash-zsh",label:"Bash / Zsh",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'function y() {\n\tlocal tmp="$(mktemp -t "yazi-cwd.XXXXXX")"\n\tyazi "$@" --cwd-file="$tmp"\n\tif cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then\n\t\tbuiltin cd -- "$cwd"\n\tfi\n\trm -f -- "$tmp"\n}\n'})})}),(0,s.jsx)(t.Z,{value:"fish",label:"Fish",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'function y\n\tset tmp (mktemp -t "yazi-cwd.XXXXXX")\n\tyazi $argv --cwd-file="$tmp"\n\tif set cwd (command cat -- "$tmp"); and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]\n\t\tbuiltin cd -- "$cwd"\n\tend\n\trm -f -- "$tmp"\nend\n'})})}),(0,s.jsx)(t.Z,{value:"nushell",label:"Nushell",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'def --env y [...args] {\n\tlet tmp = (mktemp -t "yazi-cwd.XXXXXX")\n\tyazi ...$args --cwd-file $tmp\n\tlet cwd = (open $tmp)\n\tif $cwd != "" and $cwd != $env.PWD {\n\t\tcd $cwd\n\t}\n\trm -fp $tmp\n}\n'})})}),(0,s.jsx)(t.Z,{value:"powershell",label:"PowerShell",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:'function y {\n    $tmp = [System.IO.Path]::GetTempFileName()\n    yazi $args --cwd-file="$tmp"\n    $cwd = Get-Content -Path $tmp\n    if (-not [String]::IsNullOrEmpty($cwd) -and $cwd -ne $PWD.Path) {\n        Set-Location -LiteralPath $cwd\n    }\n    Remove-Item -Path $tmp\n}\n'})})}),(0,s.jsxs)(t.Z,{value:"command-prompt",label:"Command Prompt",children:[(0,s.jsxs)(n.p,{children:["Create the file ",(0,s.jsx)(n.code,{children:"y.cmd"})," and place it in your ",(0,s.jsx)(n.code,{children:"%PATH%"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:'@echo off\n\nset tmpfile=%TEMP%\\yazi-cwd.%random%\n\nyazi %* --cwd-file="%tmpfile%"\n\nset /p cwd=<%tmpfile%\n\nif not "%cwd%"=="" (\n    cd /d "%cwd%"\n)\n\ndel "%tmpfile%"\n'})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["To use it, copy the function into the configuration file of your respective shell. Then use ",(0,s.jsx)(n.code,{children:"y"})," instead of ",(0,s.jsx)(n.code,{children:"yazi"})," to start."]}),"\n",(0,s.jsx)(n.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For all keybindings, see the ",(0,s.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/shipped/yazi-config/preset/keymap.toml",children:["default ",(0,s.jsx)(n.code,{children:"keymap.toml"})," file"]}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"navigation",children:"Navigation"}),"\n",(0,s.jsxs)(n.p,{children:["To navigate between files and directories you can use the arrow keys ",(0,s.jsx)("kbd",{children:"\u2190"}),", ",(0,s.jsx)("kbd",{children:"\u2193"}),", ",(0,s.jsx)("kbd",{children:"\u2191"})," and ",(0,s.jsx)("kbd",{children:"\u2192"}),"\nor Vim-like keys such as ",(0,s.jsx)("kbd",{children:"h"}),", ",(0,s.jsx)("kbd",{children:"j"}),", ",(0,s.jsx)("kbd",{children:"k"}),", ",(0,s.jsx)("kbd",{children:"l"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Alternate key"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"k"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"\u2191"})}),(0,s.jsx)(n.td,{children:"Move the cursor up"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"j"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"\u2193"})}),(0,s.jsx)(n.td,{children:"Move the cursor down"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"l"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"\u2192"})}),(0,s.jsx)(n.td,{children:"Enter hovered directory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"h"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"\u2190"})}),(0,s.jsx)(n.td,{children:"Leave the current directory and into its parent"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Further navigation commands can be found in the table below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"K"})}),(0,s.jsx)(n.td,{children:"Seek up 5 units in the preview"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"J"})}),(0,s.jsx)(n.td,{children:"Seek down 5 units in the preview"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"g"})," \u21d2 ",(0,s.jsx)("kbd",{children:"g"})]}),(0,s.jsx)(n.td,{children:"Move cursor to the top"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"G"})}),(0,s.jsx)(n.td,{children:"Move cursor to the bottom"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,s.jsx)(n.p,{children:"To select files and directories, the following commands are available."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Space"})}),(0,s.jsx)(n.td,{children:"Toggle selection of hovered file/directory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"v"})}),(0,s.jsx)(n.td,{children:"Enter visual mode (selection mode)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"V"})}),(0,s.jsx)(n.td,{children:"Enter visual mode (unset mode)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"a"})]}),(0,s.jsx)(n.td,{children:"Select all files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"r"})]}),(0,s.jsx)(n.td,{children:"Inverse selection of all files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Esc"})}),(0,s.jsx)(n.td,{children:"Cancel selection"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"file-operations",children:"File operations"}),"\n",(0,s.jsx)(n.p,{children:"To interact with selected files/directories use any of the commands below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"o"})}),(0,s.jsx)(n.td,{children:"Open selected files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"O"})}),(0,s.jsx)(n.td,{children:"Open selected files interactively"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Enter"})}),(0,s.jsx)(n.td,{children:"Open selected files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"Enter"})]}),(0,s.jsx)(n.td,{children:"Open selected files interactively (some terminals don't support it yet)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"y"})}),(0,s.jsx)(n.td,{children:"Yank selected files (copy)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"x"})}),(0,s.jsx)(n.td,{children:"Yank selected files (cut)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"p"})}),(0,s.jsx)(n.td,{children:"Paste yanked files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"P"})}),(0,s.jsx)(n.td,{children:"Paste yanked files (overwrite if the destination exists)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"-"})}),(0,s.jsx)(n.td,{children:"Symlink the absolute path of yanked files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"_"})}),(0,s.jsx)(n.td,{children:"Symlink the relative path of yanked files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"-"})]}),(0,s.jsx)(n.td,{children:"Hardlink yanked files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Y"})," or ",(0,s.jsx)("kbd",{children:"X"})]}),(0,s.jsx)(n.td,{children:"Cancel the yank status"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"d"})}),(0,s.jsx)(n.td,{children:"Trash selected files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"D"})}),(0,s.jsx)(n.td,{children:"Permanently delete selected files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"a"})}),(0,s.jsx)(n.td,{children:"Create a file (ends with / for directories)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"r"})}),(0,s.jsx)(n.td,{children:"Rename selected file(s)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:";"})}),(0,s.jsx)(n.td,{children:"Run a shell command"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:":"})}),(0,s.jsx)(n.td,{children:"Run a shell command (block until finishes)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"."})}),(0,s.jsx)(n.td,{children:"Toggle the visibility of hidden files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"z"})}),(0,s.jsx)(n.td,{children:"Jump to a directory using zoxide"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Z"})}),(0,s.jsx)(n.td,{children:"Jump to a directory or reveal a file using fzf"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"copy-paths",children:"Copy paths"}),"\n",(0,s.jsx)(n.p,{children:"To copy paths, use any of the following commands below."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Observation: ",(0,s.jsx)("kbd",{children:"c"})," \u21d2 ",(0,s.jsx)("kbd",{children:"d"})," indicates pressing the ",(0,s.jsx)("kbd",{children:"c"})," key followed by pressing the ",(0,s.jsx)("kbd",{children:"d"})," key."]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"c"})," \u21d2 ",(0,s.jsx)("kbd",{children:"c"})]}),(0,s.jsx)(n.td,{children:"Copy the file path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"c"})," \u21d2 ",(0,s.jsx)("kbd",{children:"d"})]}),(0,s.jsx)(n.td,{children:"Copy the directory path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"c"})," \u21d2 ",(0,s.jsx)("kbd",{children:"f"})]}),(0,s.jsx)(n.td,{children:"Copy the filename"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"c"})," \u21d2 ",(0,s.jsx)("kbd",{children:"n"})]}),(0,s.jsx)(n.td,{children:"Copy the filename without extension"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"filter-files",children:"Filter files"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"f"})}),(0,s.jsx)(n.td,{children:"Filter files"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"find-files",children:"Find files"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"/"})}),(0,s.jsx)(n.td,{children:"Find next file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"?"})}),(0,s.jsx)(n.td,{children:"Find previous file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"n"})}),(0,s.jsx)(n.td,{children:"Go to the next found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"N"})}),(0,s.jsx)(n.td,{children:"Go to the previous found"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"search-files",children:"Search files"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"s"})}),(0,s.jsxs)(n.td,{children:["Search files by name using ",(0,s.jsx)(n.a,{href:"https://github.com/sharkdp/fd",children:"fd"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"S"})}),(0,s.jsxs)(n.td,{children:["Search files by content using ",(0,s.jsx)(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"ripgrep"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"s"})]}),(0,s.jsx)(n.td,{children:"Cancel the ongoing search"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sorting",children:"Sorting"}),"\n",(0,s.jsx)(n.p,{children:"To sort files/directories use the following commands."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Observation: ",(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"a"})," indicates pressing the ",(0,s.jsx)("kbd",{children:","})," key followed by pressing the ",(0,s.jsx)("kbd",{children:"a"})," key."]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"m"})]}),(0,s.jsx)(n.td,{children:"Sort by modified time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"M"})]}),(0,s.jsx)(n.td,{children:"Sort by modified time (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"c"})]}),(0,s.jsx)(n.td,{children:"Sort by creation time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"C"})]}),(0,s.jsx)(n.td,{children:"Sort by creation time (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"e"})]}),(0,s.jsx)(n.td,{children:"Sort by file extension"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"E"})]}),(0,s.jsx)(n.td,{children:"Sort by file extension (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"a"})]}),(0,s.jsx)(n.td,{children:"Sort alphabetically"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"A"})]}),(0,s.jsx)(n.td,{children:"Sort alphabetically (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"n"})]}),(0,s.jsx)(n.td,{children:"Sort naturally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"N"})]}),(0,s.jsx)(n.td,{children:"Sort naturally (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"s"})]}),(0,s.jsx)(n.td,{children:"Sort by size"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"S"})]}),(0,s.jsx)(n.td,{children:"Sort by size (reverse)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:","})," \u21d2 ",(0,s.jsx)("kbd",{children:"r"})]}),(0,s.jsx)(n.td,{children:"Sort randomly"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"multi-tab",children:"Multi-tab"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key binding"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"t"})}),(0,s.jsx)(n.td,{children:"Create a new tab with CWD"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"1"}),", ",(0,s.jsx)("kbd",{children:"2"}),", ..., ",(0,s.jsx)("kbd",{children:"9"})]}),(0,s.jsx)(n.td,{children:"Switch to the N-th tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"["})}),(0,s.jsx)(n.td,{children:"Switch to the previous tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"]"})}),(0,s.jsx)(n.td,{children:"Switch to the next tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"{"})}),(0,s.jsx)(n.td,{children:"Swap current tab with previous tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"}"})}),(0,s.jsx)(n.td,{children:"Swap current tab with next tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"c"})]}),(0,s.jsx)(n.td,{children:"Close the current tab"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"flavors",children:"Flavors"}),"\n",(0,s.jsxs)(n.p,{children:["Pick a color scheme you like from our ",(0,s.jsx)(n.a,{href:"https://github.com/yazi-rs/flavors",children:"flavors repository"}),", or ",(0,s.jsx)(n.a,{href:"/docs/flavors/overview#cooking",children:"cooking a flavor"}),"!"]})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1332:(e,n,r)=>{r.d(n,{Z:()=>t});r(959);var s=r(5341);const d={tabItem:"tabItem_x1w9"};var i=r(1527);function t(e){let{children:n,hidden:r,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(d.tabItem,t),hidden:r,children:n})}},2537:(e,n,r)=>{r.d(n,{Z:()=>g});var s=r(959),d=r(5341),i=r(4384),t=r(8903),l=r(3524),c=r(6824),h=r(5753),a=r(1384);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:d}}=e;return{value:n,label:r,attributes:s,default:d}}))}(r);return function(e){const n=(0,h.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:r}=e;const d=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(d.location.search);n.set(i,e),d.replace({...d.location,search:n.toString()})}),[i,d])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:d}=e,i=x(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[h,o]=u({queryString:r,groupId:d}),[b,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[d,i]=(0,a.Nk)(r);return[d,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:d}),f=(()=>{const e=h??b;return j({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,i]),tabValues:i}}var p=r(4957);const f={tabList:"tabList_Z_Km",tabItem:"tabItem_CrVd"};var k=r(1527);function m(e){let{className:n,block:r,selectedValue:s,selectValue:t,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),a=e=>{const n=e.currentTarget,r=c.indexOf(n),d=l[r].value;d!==s&&(h(n),t(d))},o=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:o,onClick:a,...i,className:(0,d.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:i}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,d.Z)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=b(e);return(0,k.jsxs)("div",{className:(0,d.Z)("tabs-container",f.tabList),children:[(0,k.jsx)(m,{...n,...e}),(0,k.jsx)(y,{...n,...e})]})}function g(e){const n=(0,p.Z)();return(0,k.jsx)(v,{...e,children:o(e.children)},String(n))}},6225:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(959);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);