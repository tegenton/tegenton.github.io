const Config = {
    name: "tegenton",
    scale: 1,
    Links: [
        [
            "Drexel",
            [
                ["Connect", "https://connect.drexel.edu/"],
                ["Email", "https://outlook.office365.com/mail/inbox"],
		["Gitlab", "https://gitlab.cci.drexel.edu/"]
            ]
        ],
        [
            "Personal",
            [
                ["Github", "https://github.com/tegenton/"],
                ["LinkedIn", "https://www.linkedin.com/in/timothy-egenton-026739188/"]
            ]
        ],
        [
            "Practice",
            [
                ["LeetCode", "https://leetcode.com/"],
                ["HackerRank", "https://www.hackerrank.com/"],
                ["OverTheWire", "https://overthewire.org/wargames/"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>`
        ).join("")

        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
