function setTitle() {
  const userInput = prompt("What would you like?");
  if (userInput !== null) {
    document.title = userInput;
  }
}

function setFavicon() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = e.target.result;
        document.getElementsByTagName('head')[0].appendChild(link);
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}
