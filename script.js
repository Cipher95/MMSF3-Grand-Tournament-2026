
document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC DATA STORE (ENGLISH) ---
    const tournamentDataEN = {
        groups: [{
            name: "Group Alpha Standings",
            players: [
                { rank: 0, name: 'Cipher', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'libero', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Thiago', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'ᴰᵃʳᵏSaidh', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Cipher', s1: 0, p2: 'libero', s2: 0 },
                { p1: 'Thiago', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'Thiago', s2: 0 },
                { p1: 'libero', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'libero', s1: 0, p2: 'Thiago', s2: 0 } */
            ]
        }, {
            name: "Group Bravo Standings",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 }
            ],
            matches: [
               /* { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 },
                { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 },
                { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 } */
            ]
        }],
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

    // --- DYNAMIC DATA STORE (JAPANESE) ---
    const tournamentDataJP = {
        groups: [{
            name: "グループ・アルファ 順位表",
            players: [
                { rank: 0, name: 'Cipher', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'libero', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'Thiago', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 },
                { rank: 0, name: 'ᴰᵃʳᵏSaidh', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0, sf: 0 }
            ],
            matches: [
               /* { p1: 'Cipher', s1: 0, p2: 'libero', s2: 0 },
                { p1: 'Thiago', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'Thiago', s2: 0 },
                { p1: 'libero', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'Cipher', s1: 0, p2: 'ᴰᵃʳᵏSaidh', s2: 0 },
                { p1: 'libero', s1: 0, p2: 'Thiago', s2: 0 } */
            ]
        }, {
            name: "グループ・ブラボー 順位表",
            players: [
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 },
                { rank: 0, name: '-', mp: 0, w: 0, d: 0, l: 0, diff: 0, pts: 0 }
            ],
            matches: [
               /* { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 },
                { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 },
                { p1: '-', s1: 0, p2: '-', s2: 0 }, { p1: '-', s1: 0, p2: '-', s2: 0 } */
            ]
        }],
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

    // --- DATA STORE (ENGLISH) ---
    const pageDataEN = {
        about: { /* ... content remains the same ... */ },
        schedule: { /* ... content remains the same ... */ },
        brackets: { /* ... content remains the same ... */ },
        ranking: {
            title: "Group Stage Standings",
            image: "MMSF3GuidebookBlackbox.webp",
            content: `<p>In the Group Stage, players battle everyone in their group. Standings are determined by match wins. The top two from each group advance to the Knockout Stage.</p>`,
            dynamicContent: tournamentDataEN // Reference to dynamic data
        },
        format: {
            title: "Knockout Round Results",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
            content: `<p>The main event is a single-elimination knockout bracket. The bracket below shows the final results from the Quarterfinals to the Grand Final.</p>`,
            dynamicContent: tournamentDataEN // Reference to dynamic data
        },
        rules: { /* ... content remains the same ... */ }
    };
     // --- DATA STORE (JAPANESE) ---
    const pageDataJP = {
        about: { /* ... content remains the same ... */ },
        schedule: { /* ... content remains the same ... */ },
        brackets: { /* ... content remains the same ... */ },
        ranking: {
            title: "グループステージ順位表",
            image: "MMSF3GuidebookBlackbox.webp",
            content: `<p>グループステージでは、プレイヤーはグループ内の全員と対戦します。順位は試合の勝利数によって決定されます。各グループの上位2名がノックアウトステージに進出します。</p>`,
            dynamicContent: tournamentDataJP // Reference to dynamic data
        },
        format: {
            title: "ノックアウトステージ 結果",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
            content: `<p>メインイベントは、シングルエリミネーションのノックアウト方式トーナメントです。以下の対戦表は、準々決勝からグランドファイナルまでの最終的な結果を示しています。</p>`,
            dynamicContent: tournamentDataJP // Reference to dynamic data
        },
        rules: { /* ... content remains the same ... */ }
    };

    // Add unchanged data back to the objects
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
        schedule: {
            title: "Event Schedule",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
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
                    <li><b>Game Version:</b> All players must use an unmodified or modified version of Mega Man Star Force 3: Black Ace or Red Joker.</li>
                    <li><b>Folder Rules:</b> Each player's Folder must contain exactly 30 Battle Cards. Only one Giga Card is permitted per folder.</li>
                    <li><b>Noise Forms:</b> All Noise Change forms are permitted. Use of Finalized forms (Black Ace / Red Joker) is allowed only if the Noise gauge is filled to 200% through normal gameplay.</li>
                    <li><b>BrotherBand:</b> Players must form a real-life BrotherBand connection or fake BrotherBand for their match.</li>
                    <li><b>Banned Noise:</b> Rogue (Burai) Noise is not permitted.</li>
                    <li><b>Banned Standard Cards:</b> The cards Black Hole (1, 2, 3, X) are not allowed.</li>
                    <li><b>Banned Giga Cards:</b> The Giga Cards Admins, Acid Arrest, Crimson Meteor, and Darkness Hole are not allowed.</li>
                    <li><b>Version Exclusive Giga Cards:</b> Black Ace Giga Cards may not be included in a Red Joker folder, and Red Joker Giga Cards may not be included in a Black Ace folder. Access via card roulette is permitted.</li>
                    <li><b>Disputes:</b> In case of a disconnect, Cipher will review match data to determine the outcome. All admin decisions are final.</li>
                    <li><b>Penalty:</b> Any player found breaking these rules will be immediately disqualified (DQ'd).</li>
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
        schedule: {
            title: "イベントスケジュール",
            image: "https://pm1.aminoapps.com/8389/351a4299a369e89a7ba8f64418c9e578af6bab05r1-755-1068v2_hq.jpg",
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
                    <li><b>フォルダールール：</b>各プレイヤーのフォルダには、正確に30枚のバトルカードが含まれていなければなりません。フォルダごとに許可されるギガカードは1枚のみです。</li>
                    <li><b>ノイズ形態：</b>すべてのノイズチェンジ形態が許可されます。ファイナライズ形態（ブラックエース／レッドジョーカー）の使用は、通常のゲームプレイを通じてノイズゲージが200%に達した場合にのみ許可されます。</li>
                    <li><b>ブラザーバンド：</b>プレイヤーは試合のために現実世界でのブラザーバンド接続またはフェイクブラザーバンドを結ばなければなりません。</li>
                    <li><b>禁止ノイズ：</b>ブライノイズの使用は許可されません。</li>
                    <li><b>禁止スタンダードカード：</b>カード「ブラックホール」（1、2、3、X）は禁止です。</li>
                    <li><b>禁止ギガカード：</b>ギガカード「アドミン」、「アシッドアレスト」、「クリムゾンメテオ」、「ダークネスホール」は禁止です。</li>
                    <li><b>バージョン限定ギガカード：</b>ブラックエースのギгаカードをレッドジョーカーのフォルダに、またレッドジョーカーのギгаカードをブラックエースのフォルダに入れることはできません。カードルーレットによる使用は許可されます。</li>
                    <li><b>紛争：</b>接続が切断された場合、サイファーが試合データを確認して結果を決定します。すべての管理者の決定は最終的なものです。</li>
                    <li><b>ペナルティ：</b>これらのルールに違反したプレイヤーは、即座に失格（DQ）となります。</li>
                </ul>
            `
        }
    };
    Object.assign(pageDataJP, originalPageDataJP);
    
    // --- UI TEXT ---
    const uiText = { /* ... content remains the same ... */ };

    const originalUiText = {
        en: {
            pageTitle: "MMSF3 Grand Tournament 2025",
            mainTitle: "MMSF3 Grand Tournament 2025",
            navAbout: "About",
            navSchedule: "Schedule",
            navBrackets: "Brackets",
            navRanking: "Ranking",
            navFormat: "Format",
            navRules: "Rules",
            footerText: "This website is for demonstration purposes only. Mega Man Star Force is a property of Capcom."
        },
        jp: {
            pageTitle: "流星のロックマン3 グランドトーナメント 2025",
            mainTitle: "流星のロックマン3 グランドトーナメント 2025",
            navAbout: "概要",
            navSchedule: "スケジュール",
            navBrackets: "対戦表",
            navRanking: "ランキング",
            navFormat: "形式",
            navRules: "ルール",
            footerText: "このウェブサイトはデモンストレーション目的で作成されました。『流星のロックマン』は株式会社カプコンの登録商標です。"
        }
    }
    Object.assign(uiText, originalUiText);


    // --- GLOBAL STATE ---
    let currentLang = 'en';
    let pageData = pageDataEN;

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const langSelector = document.getElementById('lang-selector');
    const mainContainer = document.getElementById('main-container');
    const langButtons = document.querySelectorAll('.lang-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // --- LOGIC FOR RANKING CALCULATION ---

    /**
     * Calculates and sorts the standings for a single group based on match results.
     * @param {object} group - The group object from tournamentData.
     */
    function calculateGroupStandings(group) {
        // 1. Reset all player stats to zero before recalculating
        group.players.forEach(p => {
            p.mp = 0; p.w = 0; p.d = 0; p.l = 0;
            p.diff = 0; p.pts = 0; p.sf = 0;
        });

        // 2. Iterate through each match to tally stats
        group.matches.forEach(match => {
            const p1 = group.players.find(p => p.name === match.p1);
            const p2 = group.players.find(p => p.name === match.p2);

            // If players not found or it's a placeholder match, skip
            if (!p1 || !p2 || p1.name === '-') return;

            // Update matches played
            p1.mp++;
            p2.mp++;

            // Update scores for and difference
            p1.sf += match.s1;
            p2.sf += match.s2;
            p1.diff += (match.s1 - match.s2);
            p2.diff += (match.s2 - match.s1);

            // Update win/draw/loss and points
            if (match.s1 > match.s2) { // p1 wins
                p1.w++;
                p1.pts += 3;
                p2.l++;
            } else if (match.s2 > match.s1) { // p2 wins
                p2.w++;
                p2.pts += 3;
                p1.l++;
            } else { // draw
                p1.d++;
                p1.pts += 1;
                p2.d++;
                p2.pts += 1;
            }
        });

        // 3. Sort players based on ranking criteria
        group.players.sort((a, b) => {
            // Primary: Points (descending)
            if (b.pts !== a.pts) {
                return b.pts - a.pts;
            }
            // Tie-breaker 1: Score Difference (descending)
            if (b.diff !== a.diff) {
                return b.diff - a.diff;
            }
            // Tie-breaker 2: Scores For (descending)
            return b.sf - a.sf;
        });

        // 4. Update the rank property based on the sorted order
        group.players.forEach((player, index) => {
            player.rank = index + 1;
        });
    }
    
    // --- DYNAMIC CONTENT RENDERERS ---

    /**
     * Creates the HTML for a league table from a group data object.
     * @param {object} group - The group object from tournamentData.
     * @param {boolean} isJp - Whether to use Japanese headers.
     * @returns {string} HTML string for the league table.
     */
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

    /**
     * Creates the HTML for match results from a group data object. (MODIFIED)
     * @param {object} group - The group object from tournamentData.
     * @param {boolean} isJp - Whether to use Japanese title.
     * @returns {string} HTML string for the match results list.
     */
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

    /**
     * Creates the HTML for the entire knockout bracket.
     * @param {object} knockoutData - The knockout object from tournamentData.
     * @returns {string} HTML string for the bracket container.
     */
    function createBracketHTML(knockoutData) {
        const roundsHTML = knockoutData.rounds.map((round, roundIndex) => {
            const matchesHTML = round.matches.map(match => {
                // Determine winner for styling
                const p1Winner = match.p1 && match.p2 && match.p1.score > match.p2.score;
                const p2Winner = match.p1 && match.p2 && match.p2.score > match.p1.score;

                // Handle single-player entries like the Champion
                if (!match.p2) {
                    const championClass = match.p1.isChampion ? 'player champion' : 'player';
                    return `
                        <div class="match">
                            <ul class="match-content">
                                <li class="${championClass}">${match.p1.name}</li>
                            </ul>
                        </div>
                    `;
                }
                
                return `
                    <div class="match">
                        <ul class="match-content">
                            <li class="player ${p1Winner ? 'winner' : ''}">${match.p1.name}<span class="score">${match.p1.score}</span></li>
                            <li class="player ${p2Winner ? 'winner' : ''}">${match.p2.name}<span class="score">${match.p2.score}</span></li>
                        </ul>
                        ${roundIndex < knockoutData.rounds.length - 2 ? '<div class="match-connector"></div>' : ''}
                    </div>
                `;
            }).join('');

            return `
                <div class="round round-${roundIndex + 1}">
                    <h3 class="round-title">${round.name}</h3>
                    ${matchesHTML}
                </div>
            `;
        }).join('');

        return `
            <div class="bracket-container">
                <div class="bracket">
                    ${roundsHTML}
                </div>
            </div>
        `;
    }


    // --- FUNCTIONS ---

    /**
     * Updates all static UI text to the selected language.
     */
    function updateUIText() {
        const texts = uiText[currentLang];
        document.title = texts.pageTitle;
        document.getElementById('main-title').textContent = texts.mainTitle;
        document.getElementById('nav-about').textContent = texts.navAbout;
        document.getElementById('nav-schedule').textContent = texts.navSchedule;
        document.getElementById('nav-brackets').textContent = texts.navBrackets;
        document.getElementById('nav-ranking').textContent = texts.navRanking;
        document.getElementById('nav-format').textContent = texts.navFormat;
        document.getElementById('nav-rules').textContent = texts.navRules;
        document.getElementById('footer-text').textContent = texts.footerText;
    }

    /**
     * Switches the content displayed in the main area.
     * @param {string} pageKey - The key corresponding to the data in pageData.
     */
    function switchContent(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        contentArea.classList.add('fade-out');

        setTimeout(() => {
            let dynamicHTML = '';
            const isJp = currentLang === 'jp';

            // Check if this page has dynamic content to render
            if (pageKey === 'ranking' && data.dynamicContent) {
                dynamicHTML = data.dynamicContent.groups.map(group =>
                    createLeagueTableHTML(group, isJp) + createMatchResultsHTML(group, isJp)
                ).join('');
            } else if (pageKey === 'format' && data.dynamicContent) {
                dynamicHTML = createBracketHTML(data.dynamicContent.knockout);
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


    /**
     * Updates the clock and date display with localization.
     */
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

    /**
     * Shows or hides the 'back to top' button based on scroll position.
     */
    function handleBackToTopButton() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    /**
     * Initializes the main application after language selection.
     */
    function initialize() {
        // Hide language selector and show main content
        langSelector.style.display = 'none';
        mainContainer.style.display = 'block';

        // Set the correct data object
        pageData = currentLang === 'jp' ? pageDataJP : pageDataEN;

        // Update all UI text elements
        updateUIText();
        
        // Load the default page content ('about'), which will be re-rendered
        // correctly after the nav link is clicked.
        document.querySelector('.nav-link[data-page="about"]').click();


        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

        // Add event listeners for the back to top button
        window.addEventListener('scroll', handleBackToTopButton);
        backToTopBtn.addEventListener('click', scrollToTop);

        // Attempt to play audio on load
        playAudio();
    }

    // --- EVENT LISTENERS & INITIALIZATION ---

    // Calculate rankings for all groups as soon as the script loads
    tournamentDataEN.groups.forEach(calculateGroupStandings);
    tournamentDataJP.groups.forEach(calculateGroupStandings);

    // Set up language selection button clicks
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = button.getAttribute('data-lang');
            // If Japanese is selected, switch the title on the language selection screen itself
            if (currentLang === 'jp') {
                document.getElementById('lang-choose-title').textContent = '言語を選択してください';
            }
            initialize();
        });
    });

    // Set up navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    // --- BACKGROUND MUSIC HANDLER ---
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
