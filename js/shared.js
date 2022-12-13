function login() {
    if (document.querySelector("#remember_me").checked) localStorage.setItem('user', JSON.stringify({ name: 'Anonymous', id: 242775444, email: 'anonymous@gmail.com', phone: '+996 125 4768', location: 'الرياض ,السعودية' }));
    else sessionStorage.setItem('user', JSON.stringify({ name: 'Anonymous', id: 242775444, email: 'anonymous@gmail.com', phone: '+996 125 4768', location: 'الرياض ,السعودية' }));
}

function onInit() {
    let isLoggedIn = !!localStorage.getItem("user") || !!sessionStorage.getItem("user");

    document.querySelector("#login_btn").style.display = !isLoggedIn ? 'inline-block' : 'none';
    document.querySelector("#user_btn").style.display = isLoggedIn ? 'inline-block' : 'none';
}
onInit();