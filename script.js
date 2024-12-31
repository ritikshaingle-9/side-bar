function exit(){
    const sidebar = document.getElementById('showsidebar'); 
    sidebar.style.visibility ='hidden'; 
    const hamburgur = document.getElementById(`hamburgur`);
    hamburgur.style.visibility='visible';
}
function showsidebar(){
    const sidebar = document.getElementById(`showsidebar`);
    sidebar.style.visibility='visible';

    const hamburgur = document.getElementById(`hamburgur`);
    hamburgur.style.visibility='hidden';
}
