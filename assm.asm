; SandzOS virtual hardware routine
section .text
global _add
_add:
    mov eax, [esp+4]   ; load first arg
    add eax, [esp+8]   ; add second arg
    ret
