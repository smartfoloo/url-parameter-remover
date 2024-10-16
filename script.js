document.getElementById('cleanButton').addEventListener('click', () => {
  const urlInput = document.getElementById('urlInput').value;
  const cleanedUrls = cleanseUrls(urlInput);
  document.getElementById('result').textContent = cleanedUrls.join('\n');
});

function cleanseUrls(urls) {
  return urls.split('\n').map(url => {
    const trimmedUrl = url.trim(); 
    if (trimmedUrl === "") return ""; 
    try {
      const urlObj = new URL(trimmedUrl);
      return urlObj.origin + urlObj.pathname; 
    } catch (error) {
      return `Invalid URL: ${trimmedUrl}`;
    }
  }).filter(url => url !== ""); 
}
