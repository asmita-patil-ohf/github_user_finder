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
    <div class="profile-card">
        <div class="left_profile">
            <img src="${data.avatar_url}" class="avatar">
        </div>
     <div class="right_profile">
        <h2 class="name">${data.name || "No name available"}</h2>

        <div class="stats">
            <div>
                <h3>${data.public_repos}</h3>
                <p>Repos</p>
            </div>

            <div>
                <h3>${data.followers}</h3>
                <p>Followers</p>
            </div>
        </div>

        <a href="${data.html_url}" target="_blank" class="profile-btn">
            View Profile
        </a>

    </div>
    </div>
`;

    } catch (error) {

        document.getElementById("result").innerHTML =
            `<div class="not_found">
            <p>User not found!</p>
            </div>
            `;
    }

}