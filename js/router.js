let content = document.querySelector('main');

const routes = {
    '/': home,
    '/about': about,
};

window.onpopstate = () => {
    content.innerHTML = routes[window.location.pathname];
};

let navigate = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    content.innerHTML = routes[pathName];
};

content.innerHTML = routes[window.location.pathname];

window.onload = navigate('/');
