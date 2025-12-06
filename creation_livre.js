const form = document.getElementById('bookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');

const errTitle = document.getElementById('errTitle');
const errAuthor = document.getElementById('errAuthor');
const errYear = document.getElementById('errYear');
const confirmation = document.getElementById('confirmation');
const bookList = document.getElementById('bookList');


// Validation en temps réel
title.addEventListener('input', ()=>{ errTitle.textContent = title.value.trim() ? '' : 'Le titre est obligatoire'; });
author.addEventListener('input', ()=>{ errAuthor.textContent = author.value.trim() ? '' : 'L\'auteur est obligatoire'; });
year.addEventListener('input', ()=>{
    const val = Number(year.value);
    if(!year.value.trim()) errYear.textContent='L\'année est obligatoire';
    else if(val<1900||val>2025) errYear.textContent='Année invalide';
    else errYear.textContent='';
});

// Submit du formulaire
form.addEventListener('submit', e=>{
    e.preventDefault();
    let valid = true;

    if(!title.value.trim()){ errTitle.textContent='Le titre est obligatoire'; valid=false; } else errTitle.textContent='';
    if(!author.value.trim()){ errAuthor.textContent='L\'auteur est obligatoire'; valid=false; } else errAuthor.textContent='';
    const y = Number(year.value);
    if(!year.value.trim()){ errYear.textContent='L\'année est obligatoire'; valid=false; }
    else if(y<1900||y>2025){ errYear.textContent='Année invalide'; valid=false; } else errYear.textContent='';

    if(!valid) return;

    // Ajouter le livre
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    books.push({ title:title.value.trim(), author:author.value.trim(), year:y });
    localStorage.setItem('books', JSON.stringify(books));

    // Confirmation
    confirmation.textContent = 'Livre ajouté avec succès !';
    setTimeout(()=>confirmation.textContent='',2000);

    // Réinitialiser le formulaire
    form.reset();

});
