var c = document.getElementById("playfield"), ctx = c.getContext("2d");

var playfield = Array(21).fill(0).map(() => Array(10).fill(0));

var type, face = 0, x = 0, y = 3, score = 0;

var block =
[
    [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],
    [
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
];

var key = 0;

window.addEventListener("keydown", (event) =>
{
    if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d")
    {
        key = event.key;
    }
}, false);

window.addEventListener("keyup", () => key = 0, false);

function draw1(color)
{
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (block[type][face][i][j] == 1)
            {
                playfield[x + i][y + j] = color;
            }
        }
    }
}

function draw2(color)
{
    for (let i = 0; i < 21; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            if (color == 1 && playfield[i][j] == 1)
            {
                ctx.fillRect(j * 30, i * 30, 30, 30);
            }
            else if (color == 0 && playfield[i][j] == 0)
            {
                ctx.clearRect(j * 30, i * 30, 30, 30);
            }
        }
    }
}

function check(a, b, c)
{
    if (face + a == 4)
    {
        a = -3;
    }

    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (block[type][face + a][i][j] == 1)
            {
                if (x + i + b >= 21 || y + j + c >= 10 || y + j + c < 0 || playfield[x + i + b][y + j + c] == 1)
                {
                    return 0;
                }
            }
        }
    }

    return 1;
}

function start()
{
    document.getElementById("start").hidden = true;
    document.getElementById("score").style.marginTop = "700px";
    document.getElementById("score").innerHTML = 0;

    type = Math.floor(Math.random() * 7);

    let move1 = 1, move2 = 1, count = 0;

    loop1();

    function loop1()
    {
        draw1(1);

        if (move2 == 0)
        {
            type = Math.floor(Math.random() * 7);
            face = 0;
            x = 0;
            y = 3;

            move1 = 1;
            move2 = 1;
            count = 0;

            let line = 0;

            for (let i = 0; i < 21; i++)
            {
                for (let j = 0; j < 10; j++)
                {
                    if (playfield[i][j] == 1)
                    {
                        count++;
                    }
                }

                if (i == 0 && count > 0)
                {
                    alert("遊戲結束");
                    location.reload();
                }

                if (count == 10)
                {
                    for (let j = 0; j < 10; j++)
                    {
                        playfield[i][j] = 0;
                    }

                    for (let j = i; j > 0; j--)
                    {
                        for (let k = 0; k < 10; k++)
                        {
                            playfield[j][k] = playfield[j - 1][k];
                        }
                    }

                    for (let j = 0; j < 10; j++)
                    {
                        playfield[0][j] = 0;
                    }

                    line++;
                }

                count = 0;
            }

            if (line > 0)
            {
                if (line == 1)
                {
                    score += 10;
                }
                else if (line == 2)
                {
                    score += 30;
                }
                else if (line == 3)
                {
                    score += 60;
                }
                else
                {
                    score += 100;
                }

                document.getElementById("score").innerHTML = score;
                draw2(0);
            }

            setTimeout(loop1, 1);
            return;
        }

        draw2(1);
        draw1(0);

        if (move2 == 1)
        {
            if (check(0, 1, 0) == 1)
            {
                x++;
            }
            else
            {
                move1 = 0;
            }
        }

        loop2();

        function loop2()
        {
            if (count < 200 && key == 0)
            {
                count++;
                setTimeout(loop2, 1);
            }
            else
            {
                if (count == 200)
                {
                    count = 0;

                    if (move1 == 0)
                    {
                        move2 = 0;
                    }
                }

                if (key != 0)
                {
                    if (move1 == 1)
                    {
                        x--;
                    }

                    if (move2 == 1)
                    {
                        if (key == "w" && check(1, 0, 0) == 1)
                        {
                            face++;
        
                            if (face == 4)
                            {
                                face = 0;
                            }
                        }
                        else if (key == "a" && check(0, 0, -1) == 1)
                        {
                            y--;
                        }
                        else if (key == "s" && check(0, 1, 0) == 1)
                        {
                            x++;
                            count = 0;
                        }
                        else if (key == "d" && check(0, 0, 1) == 1)
                        {
                            y++;
                        }
                    }

                    key = 0;
                }

                if (move1 == 0 && check(0, 1, 0) == 1)
                {
                    move1 = 1;
                }

                draw2(0);
                setTimeout(loop1, 1);
            }
        }
    }
}
