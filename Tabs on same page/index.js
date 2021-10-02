function openCity(en, cityName) {
    var i, tabContent, tabLinks;

    //TabContent setting
    tabContent = document.getElementsByClassName("tabContent")
    for (i = 0; i < tabContent.length; i++)
        tabContent[i].style.display = "none";

    //Tablinks setting
    tabLinks = document.getElementsByClassName("tabLinks")
    for (let i = 0; i < tabLinks.length; i++)
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")

    //Hiding tab data
    document.getElementById(cityName).style.display = "block";
    en.currentTarget.className += " active"

}