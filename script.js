async function findUser() {

    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter username");
        return;
    }

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}" width="100">
            <h2>${data.name}</h2>
            <p>Followers: ${data.followers}</p>
            <a href="${data.html_url}" target="_blank">View Profile</a>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML =
            `<p style="color:red;">User not found</p>`;

    }

}