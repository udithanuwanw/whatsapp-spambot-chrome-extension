
let message = prompt("MESSAGE YOU WANT TO SPAM");
  //make sure the user entered a message and it is not empty
if (message == null || message == "") {
    alert("Please enter a message to spam. \nYou can re-run the script now.");}
let messageCount = prompt("Enter count of messages");
  //make sure the user entered a message and it is not empty
if (messageCount == null || messageCount == "") {
    alert("Please enter count to spam. \nYou can re-run the script now."); }  
messageCount=parseInt(messageCount); 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForPastedData(elem, old) {
  if (elem.childNodes && elem.childNodes.length == old) {
    return true
  }
  else {
      old = elem.childNodes.length
      return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(waitForPastedData(elem, old));
     }, 2000);
   });
  }
}
async function send_text(text) {
    const dataTransfer = new DataTransfer();
    dataTransfer.setData('text', text);
    const event = new ClipboardEvent('paste', {
          clipboardData: dataTransfer,
          bubbles: true
        });
    let el = document.querySelector('#main .copyable-area [contenteditable="true"][role="textbox"]')
    el.focus()
// select old text and replace with new
    document.execCommand("selectall");
    el.dispatchEvent(event)
    return await waitForPastedData(el, 0)
}
async function clickSend(){
	await sleep(1000);
	document.querySelector('button[aria-label="Send"]').click()

}
let counter=0;
while(counter<messageCount){
	await send_text(message);
	clickSend();
	counter+=1;
}


