  var r = [
    {title:"sample-project",lang:"JavaScript",updated:"Updated 3 days ago"},
    {title:"redux-biolerplate",lang:"JavaScript",updated:"Updated 6 days ago"},
    {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
    {title:"task-hack",lang:"CSS",updated:"Updated 6 days ago"},
    {title:"covid19-tracker",lang:"JavaScript",updated:"Updated 3 days ago"},
    {title:"redux-biolerplate",lang:"JavaScript",updated:"Updated 6 days ago"},
    {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
    {title:"task-hack",lang:"CSS",updated:"Updated 6 days ago"},
    {title:"customer-managements",lang:"JavaScript",updated:"Updated 3 days ago"},
    {title:"chart task",lang:"JavaScript",updated:"Updated 6 days ago"},
    {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
    {title:"intranet",lang:"CSS",updated:"Updated 6 days ago"}
]
var filtermain = [...r]
function onLoad()
{
document.getElementById("repocount").innerHTML = r.length;
var repocontent = ``
r.map((value) => {
repocontent += `<div class="repo">
<p>${value.title}</p>
<div class="repocontent">
<label>${value.lang}</label>
<label>1</label>
<label>${value.updated}</label>
</div>
<hr/>
</div>`
})

document.getElementById("Repositories").innerHTML = repocontent;
}
function onFilter(filterrepo)
{
var repocontent = ``
filterrepo.map((value) => {
repocontent += `<div class="repo">
<p>${value.title}</p>
<div class="repocontent">
<label> ${value.lang}${value.lang}</label>
<label>1</label>
<label>${value.updated}</label>
</div>
<hr/>
</div>`
})

document.getElementById("Repositories").innerHTML = repocontent;
}
function filter()
{
var filterrepo = []
var filter = document.getElementById("filter").value
filterrepo = filtermain.filter((value,i) => {
if(value.title.includes(filter))
return value
})
onFilter(filterrepo);
}    

function bylang()
{
var filterrepo = []
var filter = document.getElementById("lang").value
filterrepo = r.filter((value,i) => {
if(value.lang.includes(filter))
return value
})
filtermain = filterrepo;
onFilter(filtermain)
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
     
     }
     
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    
      
    document.getElementById("search").style.display="none";
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function disp()
  {
    
    document.getElementById("search").style.display="block";
  }


