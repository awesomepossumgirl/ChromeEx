function copyToClipboard(textareaId) {
  const textarea = document.getElementById(textareaId);
  const copyIcon = document.getElementById("copy-icon");
  const copyText = document.getElementById("copy-text");

  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");

  // 아이콘 변경
  copyIcon.classList.remove("bi-clipboard");
  copyIcon.classList.add("bi-check2");

  // 텍스트 변경 (Copy → Copied!)
  copyText.textContent = "Copied!";

  // 1.5초 후 원래대로 복원
  setTimeout(() => {
    copyIcon.classList.remove("bi-check2");
    copyIcon.classList.add("bi-clipboard");
    copyText.textContent = "Copy";
  }, 2000);
}
