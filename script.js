document.addEventListener('DOMContentLoaded', () => {

    const tournamentDataEN = {
        groups: [{
            name: "Group Alpha Standings",
            players: [
                { rank: 0, name: 'Baguette', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Ryuken', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Cipher', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'WolZardFire!', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Baguette', s1: 0, p2: 'Ryuken', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'WolZardFire!', s2: 0 },
                { p1: 'Baguette', s1: 0, p2: 'Cipher', s2: 0 },
                { p1: 'Ryuken', s1: 0, p2: 'WolZardFire!', s2: 0 },
                { p1: 'Baguette', s1: 0, p2: 'WolZardFire!', s2: 0 },
		{ p1: 'Ryuken', s1: 0, p2: 'Cipher', s2: 0 } */
            ]
        }, {
            name: "Group Bravo Standings",
            players: [
                { rank: 0, name: 'Thiago', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'F-00', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'libero', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Thiago', s1: 0, p2: 'F-00', s2: 0 },*/
                { p1: 'Thiago', s1: 2, p2: 'libero', s2: 0 }/*,
                { p1: 'F-00', s1: 0, p2: 'libero', s2: 0 } */
                
            ]
        }, {
            name: "Group Cipher Standings",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: []
        }, {
            name: "Group Delta Standings",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: []
        } ],
        knockout: {
            rounds: [
                {
                    name: "Quarterfinals",
                    matches: [
                        { p1: { name: "- (A1)", score: 0 }, p2: { name: "- (B2)", score: 0 } },
                        { p1: { name: "- (C1)", score: 0 }, p2: { name: "- (D2)", score: 0 } },
                        { p1: { name: "- (B1)", score: 0 }, p2: { name: "- (A2)", score: 0 } },
                        { p1: { name: "- (D1)", score: 0 }, p2: { name: "- (C2)", score: 0 } }
                    ]
                },
                {
                    name: "Semifinals",
                    matches: [
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } },
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } }
                    ]
                },
                {
                    name: "Grand Final",
                    matches: [
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } }
                    ]
                },
                {
                    name: "Champion",
                    matches: [
                        { p1: { name: "-", isChampion: true } }
                    ]
                }
            ]
        }
    };

    const tournamentDataJP = {
        groups: [{
            name: "グループ・アルファ 順位表",
            players: [
                { rank: 0, name: 'Baguette', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Ryuken', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Cipher', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'WolZardFire!', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Baguette', s1: 0, p2: 'Ryuken', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'WolZardFire!', s2: 0 },
                { p1: 'Baguette', s1: 0, p2: 'Cipher', s2: 0 },
                { p1: 'Ryuken', s1: 0, p2: 'WolZardFire!', s2: 0 },
                { p1: 'Baguette', s1: 0, p2: 'WolZardFire!', s2: 0 },
		{ p1: 'Ryuken', s1: 0, p2: 'Cipher', s2: 0 } */
            ]
        }, {
            name: "グループ・ブラボー 順位表",
            players: [
                { rank: 0, name: 'Thiago', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'F-00', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'libero', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Thiago', s1: 0, p2: 'F-00', s2: 0 },*/
                { p1: 'Thiago', s1: 2, p2: 'libero', s2: 0 }/*,
                { p1: 'F-00', s1: 0, p2: 'libero', s2: 0 } */
                
            ]
        }, {
            name: "グループ・サイファー 順位表",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: []
        }, {
            name: "グループ・デルタ 順位表",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: []
        } ],
        knockout: {
            rounds: [
                {
                    name: "準々決勝",
                    matches: [
                        { p1: { name: "- (A1)", score: 0 }, p2: { name: "- (B2)", score: 0 } },
                        { p1: { name: "- (C1)", score: 0 }, p2: { name: "- (D2)", score: 0 } },
                        { p1: { name: "- (B1)", score: 0 }, p2: { name: "- (A2)", score: 0 } },
                        { p1: { name: "- (D1)", score: 0 }, p2: { name: "- (C2)", score: 0 } }
                    ]
                },
                {
                    name: "準決勝",
                    matches: [
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } },
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } }
                    ]
                },
                {
                    name: "決勝戦",
                    matches: [
                        { p1: { name: "-", score: 0 }, p2: { name: "-", score: 0 } }
                    ]
                },
                {
                    name: "優勝",
                    matches: [
                        { p1: { name: "-", isChampion: true } }
                    ]
                }
            ]
        }
    };

    const pageDataEN = {
        ranking: {
            title: "Group Stage Standings",
            image: "MMSF3GuidebookBlackbox.webp",
            content: `<p>In the Group Stage, players battle everyone in their group. Standings are determined by match wins. The top two from each group advance to the Knockout Stage.</p>`,
            dynamicContent: tournamentDataEN
        },
        format: {
            title: "Knockout Round Results",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
            content: `<p>The main event is a single-elimination knockout bracket. The bracket below shows the final results from the Quarterfinals to the Grand Final.</p>`,
            dynamicContent: tournamentDataEN
        }
    };

    const pageDataJP = {
        ranking: {
            title: "グループステージ順位表",
            image: "MMSF3GuidebookBlackbox.webp",
            content: `<p>グループステージでは、プレイヤーはグループ内の全員と対戦します。順位は試合の勝利数によって決定されます。各グループの上位2名がノックアウトステージに進出します。</p>`,
            dynamicContent: tournamentDataJP
        },
        format: {
            title: "ノックアウトステージ 結果",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
            content: `<p>メインイベントは、シングルエリミネーションのノックアウト方式トーナメントです。以下の対戦表は、準々決勝からグランドファイナルまでの最終的な結果を示しています。</p>`,
            dynamicContent: tournamentDataJP
        }
    };

    const originalPageDataEN = {
        about: {
            title: "About the Tournament",
            image: "MMSF3TournamentArt.webp",
            content: `
                <p>Welcome to the official web portal for the Mega Man Star Force 3 Grand Tournament! The world's best Wave-Changers will compete to prove their skill, strategy, and BrotherBand bonds.</p>
                <p>This event celebrates the fast-paced, card-based combat of MMSF3, from masterful folder construction to the tactical mastery of the Noise Change system. Will a Black Ace specialist or a Red Joker powerhouse take the title of Satellite Administrator?</p>
                <h3>Hosted By Cipher</h3>
                <p>The MMSF3 Grand Tournament is proudly sanctioned and hosted by the Cipher's Competitive Gaming Division. We are dedicated to ensuring a fair, high-energy event for all participants and viewers, upholding the highest standards of competitive integrity.</p>
            `
        },
        registration: {
            title: "How to Register",
            image: "MMSF3TournamentArt.webp",
            content: `
                <h3>How to sign up?</h3>
                <p>To sign up, send a Direct Message (DM) to the person who hosted the tournament.</p>
                <h3>Where is the tournament played?</h3>
                <p>The tournament will be held on our Discord server. Here is the invite link: <a href="https://discord.gg/s3WZUNDsAq" target="_blank">https://discord.gg/s3WZUNDsAq</a>. The main channel for the tournament will be #[tournament-chat].</p>
                <h3>How is it played?</h3>
                <p>The tournament will be played using the MelonDS emulator.</p>
            `
        },
        schedule: {
            title: "Event Schedule",
            image: "og-image.webp",
            content: `
                <ul>
                    <li><b>Week 1: Registration</b> - Player registration and folder submission begins.</li>
                    <li><b>Week 2: Group Stages</b> - The top players are seeded into groups to battle in a round-robin format. Mastering Noise Change and counter-play will be key to advancing.</li>
                    <li><b>Week 3: Top 16 Knockout Stage</b> - The single-elimination bracket begins. Expect shocking Finalized forms and devastating Giga Card plays as the field narrows.</li>
                    <li><b>Week 4: Semifinals & Grand Finals</b> - The final four players clash for a spot in the Grand Finals. The last two titans will then battle for the title of Satellite Administrator.</li>
                </ul>
            `
        },
        brackets: {
            title: "Live Brackets",
            image: "https://pm1.aminoapps.com/7274/3c65554aeaaba5a9c50af05f4235b06b22a282d5r1-1448-2048v2_00.jpg",
            content: `
                <p>Follow every Wave Battle video! The tournament brackets are updated in real-time as matches conclude. See who is advancing and what incredible matchups are coming up next.</p>
                <p>All matches from the Quarterfinal stage onward will be recorded from the community. Don't miss a second of the action!</p>
            `
        },
        rules: {
            title: "Official Tournament Rules",
            image: "https://upload.wikimedia.org/wikipedia/fr/6/67/Mega_Man_Star_Force_3_Logo.png",
            content: `
                <p>To ensure competitive integrity, all participants must adhere to the official rules established by Cipher.</p>
                <ul>
                    <li><b>Game Version:</b> All players must use an unmodified or modified version of Ryūsei no Rockman 3 Black Ace or Red Joker.</li>
                    <li><b>Folder Rules:</b> Each player's Folder must contain exactly 30 Battle Cards.</li>
                    <li><b>Noise Forms:</b> All Noise Change forms are permitted. Use of Finalized forms (Black Ace / Red Joker) is allowed only if the Noise gauge is filled to 200% through normal gameplay.</li>
                    <li><b>BrotherBand:</b> Players must form a real-life BrotherBand connection or fake BrotherBand for their match.</li>
                    <li><b>Banned Noise:</b> Rogue (Burai) Noise is not permitted.</li>
                    <li><b>Banned Standard Cards:</b> The cards Black Hole (1, 2, 3, X) are not allowed.</li>
                    <li><b>Banned Giga Cards:</b> The Giga Cards Admins, Acid Arrest, Crimson Meteor, and Darkness Hole are not allowed.</li>
                    <li><b>Version Exclusive Giga Cards:</b> Black Ace Giga Cards may not be included in a Red Joker folder, and Red Joker Giga Cards may not be included in a Black Ace folder. Access via card roulette is permitted.</li>
                    <li><b>Disputes:</b> In case of a disconnect, Cipher will review match data to determine the outcome. All admin decisions are final.</li>
                    <li><b>Penalty:</b> Any player found breaking these rules or using cheats that ruin the game will be immediately disqualified.</li>
                </ul>
            `
        }
    };
    Object.assign(pageDataEN, originalPageDataEN);
    
    const originalPageDataJP = {
        about: {
            title: "トーナメント概要",
            image: "MMSF3TournamentArt.webp",
            content: `
                <p>『流星のロックマン3』グランドトーナメントの公式ウェブポータルへようこそ！世界最高のウェーブ変換士たちが、そのスキル、戦略、そしてブラザーバンドの絆を証明するために競い合います。</p>
                <p>このイベントは、巧みなフォルダ構築からノイズチェンジシステムの戦術的習熟まで、『MMSF3』の高速カードバトルを称えるものです。ブラックエースのスペシャリストか、レッドジョーカーの強者がサテライトアドミニストレーターの称号を手にするのか？</p>
                <h3>主催：サイファー</h3>
                <p>MMSF3グランドトーナメントは、サイファーの競技ゲーム部門によって誇りを持って公認・主催されています。私たちは、すべての参加者と視聴者のために、公正でエネルギッシュなイベントを保証し、競技の完全性の最高水準を維持することに専念しています。</p>
            `
        },
        registration: {
            title: "登録方法",
            image: "MMSF3TournamentArt.webp",
            content: `
                <h3>登録方法</h3>
                <p>登録するには、トーナメントの主催者にダイレクトメッセージ（DM）を送信してください。</p>
                <h3>開催場所</h3>
                <p>トーナメントは私たちのDiscordサーバーで開催されます。招待リンクはこちらです：<a href="https://discord.gg/s3WZUNDsAq" target="_blank">https://discord.gg/s3WZUNDsAq</a>。トーナメントのメインチャンネルは#[tournament-chat]になります。</p>
                <h3>プレイ方法</h3>
                <p>トーナメントはMelonDSエミュレータを使用してプレイされます。</p>
            `
        },
        schedule: {
            title: "イベントスケジュール",
            image: "og-image.webp",
            content: `
                <ul>
                    <li><b>1週目：登録</b> - プレイヤーの登録とフォルダの提出が開始されます。</li>
                <li><b>2週目：グループステージ</b> - 上位プレイヤーがグループに分けられ、総当たり戦で戦います。ノイズチェンジとカウンタープレイをマスターすることが、勝ち進むための鍵となります。</li>
                <li><b>3週目：トップ16ノックアウトステージ</b> - シングルエリミネーションブラケットが始まります。フィールドが狭まるにつれて、驚きのファイナライズ形態や破壊的なギガカードプレイが期待されます。</li>
                <li><b>4週目：準決勝＆グランドファイナル</b> - 最後の4人のプレイヤーがグランドファイナルへの出場権をかけて激突します。その後、最後の2人の巨人がサテライトアドミニストレーターの称号をかけて戦います。</li>
                </ul>
            `
        },
        brackets: {
            title: "ライブ対戦表",
            image: "https://pm1.aminoapps.com/7274/3c65554aeaaba5a9c50af05f4235b06b22a282d5r1-1448-2048v2_00.jpg",
            content: `
                <p>すべてのウェーブバトルビデオをフォローしてください！トーナメントの対戦表は試合が終わり次第、リアルタイムで更新されます。誰が勝ち進んでいるか、そして次にどんな素晴らしい対戦が待っているかを確認してください。</p>
                <p>準々決勝以降のすべての試合は、コミュニティによって録画されます。一瞬たりともお見逃しなく！</p>
            `
        },
        rules: {
            title: "公式トーナメントルール",
            image: "https://static.mercdn.net/item/detail/orig/photos/m69558035108_1.jpg",
            content: `
                <p>競技の公正性を確保するため、すべての参加者はサイファーが定める公式ルールを遵守しなければなりません。</p>
                <ul>
                    <li><b>ゲームバージョン：</b>すべてのプレイヤーは、改造されていない、または改造された『流星のロックマン3 ブラックエース』または『レッドジョーカー』を使用しなければなりません。</li>
                    <li><b>フォルダールール：</b>各プレイヤーのフォルダには、正確に30枚のバトルカードが含まれていなければなりません。</li>
                    <li><b>ノイズ形態：</b>すべてのノイズチェンジ形態が許可されます。ファイナライズ形態（ブラックエース／レッドジョーカー）の使用は、通常のゲームプレイを通じてノイズゲージが200%に達した場合にのみ許可されます。</li>
                    <li><b>ブラザーバンド：</b>プレイヤーは試合のために現実世界でのブラザーバンド接続またはフェイクブラザーバンドを結ばなければなりません。</li>
                    <li><b>禁止ノイズ：</b>ブライノイズの使用は許可されません。</li>
                    <li><b>禁止スタンダードカード：</b>カード「ブラックホール」（1、2、3、X）は禁止です。</li>
                    <li><b>禁止ギガカード：</b>ギガカード「アドミン」、「アシッドアレスト」、「クリムゾンメテオ」、「ダークネスホール」は禁止です。</li>
                    <li><b>バージョン限定ギガカード：</b>ブラックエースのギガカードをレッドジョーカーのフォルダに、またレッドジョーカーのギガカードをブラックエースのフォルダに入れることはできません。カードルーレットによる使用は許可されます。</li>
                    <li><b>紛争：</b>接続が切断された場合、サイファーが試合データを確認して結果を決定します。すべての管理者の決定は最終的なものです。</li>
                    <li><b>ペナルティ：</b>これらのルールに違反したり、ゲームを台無しにする不正行為を行ったプレイヤーは、即座に失格となります。</li>
                </ul>
            `
        }
    };
    Object.assign(pageDataJP, originalPageDataJP);
    
    const uiText = {
        en: {
            pageTitle: "MMSF3 Grand Tournament 2026",
            mainTitle: "MMSF3 Grand Tournament 2026",
            navAbout: "About",
            navRegistration: "Registration",
            navSchedule: "Schedule",
            navBrackets: "Brackets",
            navRanking: "Ranking",
            navFormat: "Format",
            navRules: "Rules",
            footerText: "This website is for demonstration purposes only. Mega Man Star Force is a property of Capcom."
        },
        jp: {
            pageTitle: "流星のロックマン3 グランドトーナメント 2026",
            mainTitle: "流星のロックマン3 グランドトーナメント 2026",
            navAbout: "概要",
            navRegistration: "登録",
            navSchedule: "スケジュール",
            navBrackets: "対戦表",
            navRanking: "ランキング",
            navFormat: "形式",
            navRules: "ルール",
            footerText: "このウェブサイトはデモンストレーション目的で作成されました。『流星のロックマン』は株式会社カプコンの登録商標です。"
        }
    };

    let currentLang = 'en';
    let pageData = pageDataEN;

    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const langSelector = document.getElementById('lang-selector');
    const mainContainer = document.getElementById('main-container');
    const langButtons = document.querySelectorAll('.lang-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    function calculateGroupStandings(group) {
        group.players.forEach(p => {
            p.mp = 0; p.w = 0; p.d = 0; p.l = 0;
            p.diff = 0; p.pts = 0; p.sf = 0;
        });

        group.matches.forEach(match => {
            const p1 = group.players.find(p => p.name === match.p1);
            const p2 = group.players.find(p => p.name === match.p2);

            if (!p1 || !p2 || p1.name === '-') return;

            p1.mp++;
            p2.mp++;

            p1.sf += match.s1;
            p2.sf += match.s2;
            p1.diff += (match.s1 - match.s2);
            p2.diff += (match.s2 - match.s1);

            if (match.s1 > match.s2) {
                p1.w++;
                p1.pts += 3;
                p2.l++;
            } else if (match.s2 > match.s1) {
                p2.w++;
                p2.pts += 3;
                p1.l++;
            } else {
                p1.d++;
                p1.pts += 1;
                p2.d++;
                p2.pts += 1;
            }
        });

        group.players.sort((a, b) => {
            if (b.pts !== a.pts) {
                return b.pts - a.pts;
            }
            if (b.diff !== a.diff) {
                return b.diff - a.diff;
            }
            return b.sf - a.sf;
        });

        group.players.forEach((player, index) => {
            player.rank = index + 1;
        });
    }

    function createLeagueTableHTML(group, isJp = false) {
        const headers = isJp ?
            ['順位', 'プレイヤー', '試合', '勝', '分', '敗', '+/-', 'Pt'] :
            ['Rank', 'Player', 'MP', 'W', 'D', 'L', '+/-', 'Pts'];

        const playerRows = group.players.map(p => `
            <tr>
                <td>${p.rank}</td>
                <td>${p.name}</td>
                <td>${p.mp}</td>
                <td>${p.w}</td>
                <td>${p.d}</td>
                <td>${p.l}</td>
                <td>${p.diff > 0 ? '+' : ''}${p.diff}</td>
                <td><b>${p.pts}</b></td>
            </tr>
        `).join('');

        return `
            <table class="league-table">
                <caption>${group.name}</caption>
                <thead>
                    <tr>
                        ${headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${playerRows}
                </tbody>
            </table>
        `;
    }

    function createMatchResultsHTML(group, isJp = false) {
        const title = isJp ? `${group.name.split(' ')[0]} 試合結果` : `${group.name.split(' Standings')[0]} Match Results`;
        const matches = group.matches.map(m => `
            <li>
                <span class="match-player p1">${m.p1}</span>
                <strong class="match-score">${m.s1} - ${m.s2}</strong>
                <span class="match-player p2">${m.p2}</span>
            </li>
        `).join('');

        return `
            <h3>${title}</h3>
            <ul class="match-results">
                ${matches}
            </ul>
        `;
    }

    function createKnockoutBracketHTML(knockoutData) {
        const roundsHTML = knockoutData.rounds.map((round, roundIndex) => {
            const matchesHTML = round.matches.map((match, matchIndex) => {
                if (!match.p2) {
                    return `
                        <div class="bracket-match">
                            <div class="bracket-champion-card">
                                <div class="bracket-champion-icon">👑</div>
                                <div class="bracket-champion-name">${match.p1.name}</div>
                            </div>
                        </div>
                    `;
                }

                const p1Winner = match.p1.score > match.p2.score;
                const p2Winner = match.p2.score > match.p1.score;
                
                const showConnector = roundIndex < knockoutData.rounds.length - 2;
                
                return `
                    <div class="bracket-match">
                        <div class="bracket-match-card">
                            <div class="bracket-player ${p1Winner ? 'winner' : ''}">
                                <span class="bracket-player-name">${match.p1.name}</span>
                                <span class="bracket-player-score">${match.p1.score}</span>
                            </div>
                            <div class="bracket-player ${p2Winner ? 'winner' : ''}">
                                <span class="bracket-player-name">${match.p2.name}</span>
                                <span class="bracket-player-score">${match.p2.score}</span>
                            </div>
                        </div>
                        ${showConnector ? '<div class="bracket-connector"></div>' : ''}
                        ${showConnector ? '<div class="bracket-connector-vertical"></div>' : ''}
                    </div>
                `;
            }).join('');

            return `
                <div class="bracket-round bracket-round-${roundIndex + 1}">
                    <div class="bracket-round-title">${round.name}</div>
                    <div class="bracket-matches">
                        ${matchesHTML}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="knockout-bracket">
                <div class="knockout-bracket-inner">
                    ${roundsHTML}
                </div>
            </div>
        `;
    }

    function updateUIText() {
        const texts = uiText[currentLang];
        document.title = texts.pageTitle;
        document.getElementById('main-title').textContent = texts.mainTitle;
        document.getElementById('nav-about').textContent = texts.navAbout;
        document.getElementById('nav-registration').textContent = texts.navRegistration;
        document.getElementById('nav-schedule').textContent = texts.navSchedule;
        document.getElementById('nav-brackets').textContent = texts.navBrackets;
        document.getElementById('nav-ranking').textContent = texts.navRanking;
        document.getElementById('nav-format').textContent = texts.navFormat;
        document.getElementById('nav-rules').textContent = texts.navRules;
        document.getElementById('footer-text').textContent = texts.footerText;
    }

    function switchContent(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        contentArea.classList.add('fade-out');

        setTimeout(() => {
            let dynamicHTML = '';
            const isJp = currentLang === 'jp';

            if (pageKey === 'ranking' && data.dynamicContent) {
                dynamicHTML = data.dynamicContent.groups.map(group =>
                    createLeagueTableHTML(group, isJp) + createMatchResultsHTML(group, isJp)
                ).join('');
            } else if (pageKey === 'format' && data.dynamicContent) {
                dynamicHTML = createKnockoutBracketHTML(data.dynamicContent.knockout);
            }

            const wrapperClass = pageKey === 'format' ? 'content-wrapper format-page' : 'content-wrapper';
            const finalContent = data.content + dynamicHTML;

            const html = `
                <div class="${wrapperClass}">
                    <div class="content-image" style="${(pageKey === 'format' || pageKey === 'brackets') ? 'display:none;' : ''}">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="content-text">
                        <h2>${data.title}</h2>
                        ${finalContent}
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;
            contentArea.classList.remove('fade-out');
        }, 300);
    }

    function updateClock() {
        const now = new Date();
        const locale = currentLang === 'jp' ? 'ja-JP' : 'en-US';

        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: locale === 'en-US' };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        const timeString = now.toLocaleTimeString(locale, timeOptions);
        const dateDayString = now.toLocaleDateString(locale, dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }

    function handleBackToTopButton() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function initialize() {
        langSelector.style.display = 'none';
        mainContainer.style.display = 'block';

        pageData = currentLang === 'jp' ? pageDataJP : pageDataEN;

        updateUIText();
        
        document.querySelector('.nav-link[data-page="about"]').click();

        updateClock();
        setInterval(updateClock, 1000);

        window.addEventListener('scroll', handleBackToTopButton);
        backToTopBtn.addEventListener('click', scrollToTop);

        playAudio();
    }

    tournamentDataEN.groups.forEach(calculateGroupStandings);
    tournamentDataJP.groups.forEach(calculateGroupStandings);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = button.getAttribute('data-lang');
            if (currentLang === 'jp') {
                document.getElementById('lang-choose-title').textContent = '言語を選択してください';
            }
            initialize();
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    const backgroundMusic = document.getElementById('bg-music');
    
    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("Autoplay was blocked by the browser. A user interaction is required to play audio.");
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }

});
