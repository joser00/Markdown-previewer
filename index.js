import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const btnEditor = document.getElementById('btn-editor')
const btnPreview = document.getElementById('btn-preview')

editor.addEventListener("input", () => parseEditor(editor, preview));

function parseEditor(editor, preview) {
  preview.innerHTML = marked.parse(editor.value);
}

btnEditor.addEventListener('click',()=> {
    editor.classList.toggle('extend')
    preview.parentElement.classList.toggle('none')
}) 

btnPreview.addEventListener('click',()=> {
    preview.classList.toggle('extend')
    editor.parentElement.classList.toggle('none')
}) 
