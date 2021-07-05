function $g(selector){
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1? nodelist[0] : nodelist;
}

function $c(element){
    return document.createElement(element);
}

export { $g, $c }