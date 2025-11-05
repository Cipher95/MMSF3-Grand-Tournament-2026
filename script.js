document.addEventListener('DOMContentLoaded', () => {

    // --- DATA STORE (ENGLISH) ---
    const pageDataEN = {
        about: {
            title: "About the Tournament",
            image: "StarForce3Art.webp",
            content: `
                <p>Welcome to the official web portal for the Mega Man Star Force 3 Grand Tournament! The world's best Wave-Changers will compete to prove their skill, strategy, and BrotherBand bonds.</p>
                <p>This event celebrates the fast-paced, card-based combat of MMSF3, from masterful folder construction to the tactical mastery of the Noise Change system. Will a Black Ace specialist or a Red Joker powerhouse take the ultimate prize?</p>
                <h3>Hosted By the Satella Police</h3>
                <p>The MMSF3 Grand Tournament is proudly sanctioned and hosted by the Satella Police's Competitive Gaming Division. We are dedicated to ensuring a fair, high-energy event for all participants and viewers, upholding the highest standards of competitive integrity.</p>
            `
        },
        schedule: {
            title: "Event Schedule",
            image: "https://static.wikia.nocookie.net/megaman/images/c/c8/MMSR3_Battle_Screen.png",
            content: `
                <ul>
                    <li><b>Day 1: WAZA Qualifiers & Folder Checks</b> - The tournament begins with the final online qualifying rounds. All main event competitors must check in and submit their Folders for official inspection.</li>
                    <li><b>Day 2: Group Stages</b> - The top players are seeded into groups to battle in a round-robin format. Mastering Noise Change and counter-play will be key to advancing.</li>
                    <li><b>Day 3: Top 16 Knockout Stage</b> - The single-elimination bracket begins. Expect shocking Finalized forms and devastating Giga Card plays as the field narrows.</li>
                    <li><b>Day 4: Semifinals & Grand Finals</b> - The final four players clash for a spot in the Grand Finals. The last two titans will then battle for the ultimate prize and the title of Satellite Administrator.</li>
                </ul>
            `
        },
        brackets: {
            title: "Live Brackets",
            image: "https://www.printyourbrackets.com/images/16-team-seeded-tournament-bracket.png",
            content: `
                <p>Follow every Wave Battle live! The tournament brackets are updated in real-time as matches conclude. See who is advancing and what incredible matchups are coming up next.</p>
                <p>All matches from the Quarterfinal stage onward will be streamed live from WAZA HQ. Don't miss a second of the action!</p>
            `
        },
        ranking: {
            title: "Group Stage Standings",
            image: "https://static.wikia.nocookie.net/megaman/images/9/9c/MMSF3_Card_Selection.PNG",
            content: `
                <p>In the Group Stage, players battle everyone in their group. Standings are determined by match wins and HP differential. The top two from each group advance to the Knockout Stage.</p>
                <table class="league-table">
                    <caption>Group Omega Standings</caption>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>MP</th>
                            <th>W</th>
                            <th>L</th>
                            <th>+/- HP</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Geo S.</td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>+1850</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sonia S.</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>+700</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bud B.</td>
                            <td>3</td>
                            <td>1</td>
                            <td>2</td>
                            <td>-1150</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Solo</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            <td>-1400</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Group Omega Match Results</h3>
                <ul class="match-results">
                    <li>Geo S. <strong>WIN</strong> (1200 HP) vs. Sonia S. (0 HP)</li>
                    <li>Bud B. <strong>WIN</strong> (800 HP) vs. Solo (0 HP)</li>
                    <li>Geo S. <strong>WIN</strong> (900 HP) vs. Bud B. (0 HP)</li>
                    <li>Sonia S. <strong>WIN</strong> (1000 HP) vs. Solo (0 HP)</li>
                    <li>Geo S. <strong>WIN</strong> (750 HP) vs. Solo (0 HP)</li>
                    <li>Sonia S. <strong>WIN</strong> (500 HP) vs. Bud B. (0 HP)</li>
                </ul>
            `
        },
        format: {
            title: "Knockout Round Results",
            image: "https://megaman.fandom.com/wiki/Mega_Man_Star_Force_3?file=MMSF3_Mega_Man_Black_Ace.png",
            content: `
                <p>The main event is a single-elimination knockout bracket. The bracket below shows the final results from the Quarterfinals to the Grand Final, with remaining HP shown for the winner.</p>
                <div class="bracket-container">
                    <div class="bracket">
                        <div class="round">
                            <h3 class="round-title">Quarterfinals</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">Geo S. (A1)<span class="score">WIN</span></li>
                                    <li class="player">Luna P. (B2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player">Jack C. (C1)<span class="score">DEL</span></li>
                                    <li class="player winner">Arthur E. (D2)<span class="score">WIN</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">Sonia S. (B1)<span class="score">WIN</span></li>
                                    <li class="player">Bud B. (A2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">Solo (D1)<span class="score">WIN</span></li>
                                    <li class="player">Queen T. (C2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">Semifinals</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">Geo S.<span class="score">WIN</span></li>
                                    <li class="player">Arthur E.<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player">Sonia S.<span class="score">DEL</span></li>
                                    <li class="player winner">Solo<span class="score">WIN</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">Grand Final</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">Geo S.<span class="score">WIN</span></li>
                                    <li class="player">Solo<span class="score">DEL</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">Champion</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player champion">Geo Stelar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        rules: {
            title: "Official Tournament Rules",
            image: "https://static.wikia.nocookie.net/megaman/images/1/18/Acid_Ace.png",
            content: `
                <p>To ensure competitive integrity, all participants must adhere to the official rules established by the Satella Police.</p>
                <ul>
                    <li><b>Game Version:</b> All players must use an unmodified version of Mega Man Star Force 3: Black Ace or Red Joker.</li>
                    <li><b>Folder Rules:</b> Each player's Folder must contain exactly 30 Battle Cards. Only one Giga Card is permitted per folder. Illegal data/cards are strictly forbidden.</li>
                    <li><b>Noise Forms:</b> All Noise Change forms are permitted. Use of Finalized forms (Black Ace / Red Joker) is allowed only if the Noise gauge is filled to 200% through normal gameplay.</li>
                    <li><b>BrotherBand:</b> Players must form a real-life BrotherBand connection for their match. Using pre-existing in-game Brothers is not allowed.</li>
                    <li><b>Disputes:</b> In case of a disconnect, a WAZA official will review match data to determine the outcome. All admin decisions are final.</li>
                </ul>
            `
        }
    };

    // --- DATA STORE (JAPANESE) ---
    const pageDataJP = {
        about: {
            title: "トーナメント概要",
            image: "StarForce3Art.webp",
            content: `
                <p>『流星のロックマン3』グランドトーナメントの公式ウェブポータルへようこそ！世界最高のウェーブ変換士たちが、そのスキル、戦略、そしてブラザーバンドの絆を証明するために競い合います。</p>
                <p>このイベントは、巧みなフォルダ構築からノイズチェンジシステムの戦術的習熟まで、『MMSF3』の高速カードバトルを称えるものです。ブラックエースのスペシャリストか、レッドジョーカーの強者が究極の賞を手にするのか？</p>
                <h3>主催：サテラポリス</h3>
                <p>MMSF3グランドトーナメントは、サテラポリスの競技ゲーム部門によって誇りを持って公認・主催されています。私たちは、すべての参加者と視聴者のために、公正でエネルギッシュなイベントを保証し、競技の完全性の最高水準を維持することに専念しています。</p>
            `
        },
        schedule: {
            title: "イベントスケジュール",
            image: "https://static.wikia.nocookie.net/megaman/images/c/c8/MMSR3_Battle_Screen.png",
            content: `
                <ul>
                    <li><b>1日目：WAZA予選＆フォルダチェック</b> - トーナメントは最終オンライン予選ラウンドで始まります。本戦出場者は全員チェックインし、公式検査のためにフォルダを提出しなければなりません。</li>
                    <li><b>2日目：グループステージ</b> - 上位プレイヤーがグループに分けられ、総当たり戦で戦います。ノイズチェンジとカウンタープレイをマスターすることが、勝ち進むための鍵となります。</li>
                    <li><b>3日目：トップ16ノックアウトステージ</b> - シングルエリミネーションブラケットが始まります。フィールドが狭まるにつれて、驚きのファイナライズ形態や破壊的なギガカードプレイが期待されます。</li>
                    <li><b>4日目：準決勝＆グランドファイナル</b> - 最後の4人のプレイヤーがグランドファイナルへの出場権をかけて激突します。その後、最後の2人の巨人が究極の賞品とサテライト管理者の称号をかけて戦います。</li>
                </ul>
            `
        },
        brackets: {
            title: "ライブ対戦表",
            image: "https://www.printyourbrackets.com/images/16-team-seeded-tournament-bracket.png",
            content: `
                <p>すべてのウェーブバトルをライブで追いかけましょう！トーナメントの対戦表は試合が終わり次第、リアルタイムで更新されます。誰が勝ち進んでいるか、そして次にどんな素晴らしい対戦が待っているかを確認してください。</p>
                <p>準々決勝以降のすべての試合は、WAZA本部からライブストリーミングされます。一瞬たりともお見逃しなく！</p>
            `
        },
        ranking: {
            title: "グループステージ順位表",
            image: "https://static.wikia.nocookie.net/megaman/images/9/9c/MMSF3_Card_Selection.PNG",
            content: `
                <p>グループステージでは、プレイヤーはグループ内の全員と対戦します。順位は試合の勝利数とHPの得失点差によって決定されます。各グループの上位2名がノックアウトステージに進出します。</p>
                <table class="league-table">
                    <caption>グループ・オメガ 順位表</caption>
                    <thead>
                        <tr>
                            <th>順位</th>
                            <th>プレイヤー</th>
                            <th>試合数</th>
                            <th>勝</th>
                            <th>敗</th>
                            <th>+/- HP</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>星河スバル</td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>+1850</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>響ミソラ</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>+700</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>牛島ゴン太</td>
                            <td>3</td>
                            <td>1</td>
                            <td>2</td>
                            <td>-1150</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>ソロ</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            <td>-1400</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <h3>グループ・オメガ 試合結果</h3>
                <ul class="match-results">
                    <li>星河スバル <strong>WIN</strong> (1200 HP) vs. 響ミソラ (0 HP)</li>
                    <li>牛島ゴン太 <strong>WIN</strong> (800 HP) vs. ソロ (0 HP)</li>
                    <li>星河スバル <strong>WIN</strong> (900 HP) vs. 牛島ゴン太 (0 HP)</li>
                    <li>響ミソラ <strong>WIN</strong> (1000 HP) vs. ソロ (0 HP)</li>
                    <li>星河スバル <strong>WIN</strong> (750 HP) vs. ソロ (0 HP)</li>
                    <li>響ミソラ <strong>WIN</strong> (500 HP) vs. 牛島ゴン太 (0 HP)</li>
                </ul>
            `
        },
        format: {
            title: "ノックアウトステージ 結果",
            image: "https://megaman.fandom.com/wiki/Mega_Man_Star_Force_3?file=MMSF3_Mega_Man_Black_Ace.png",
            content: `
                <p>メインイベントは、シングルエリミネーションのノックアウト方式トーナメントです。以下の対戦表は、準々決勝からグランドファイナルまでの最終的な道のりと結果を示しており、勝者の残りHPが表示されています。</p>
                <div class="bracket-container">
                    <div class="bracket">
                        <div class="round">
                            <h3 class="round-title">準々決勝</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">星河スバル (A1)<span class="score">WIN</span></li>
                                    <li class="player">白金ルナ (B2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player">ジャック・C (C1)<span class="score">DEL</span></li>
                                    <li class="player winner">アーサー・E (D2)<span class="score">WIN</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">響ミソラ (B1)<span class="score">WIN</span></li>
                                    <li class="player">牛島ゴン太 (A2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">ソロ (D1)<span class="score">WIN</span></li>
                                    <li class="player">クイーン・T (C2)<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">準決勝</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">星河スバル<span class="score">WIN</span></li>
                                    <li class="player">アーサー・E<span class="score">DEL</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player">響ミソラ<span class="score">DEL</span></li>
                                    <li class="player winner">ソロ<span class="score">WIN</span></li>
                                </ul>
                                <div class="match-connector"></div>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">決勝戦</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player winner">星河スバル<span class="score">WIN</span></li>
                                    <li class="player">ソロ<span class="score">DEL</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="round">
                            <h3 class="round-title">優勝</h3>
                            <div class="match">
                                <ul class="match-content">
                                    <li class="player champion">星河スバル</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        rules: {
            title: "公式トーナメントルール",
            image: "https://static.wikia.nocookie.net/megaman/images/1/18/Acid_Ace.png",
            content: `
                <p>競技の公正性を確保するため、すべての参加者はサテラポリスが定める公式ルールを遵守しなければなりません。</p>
                <ul>
                    <li><b>ゲームバージョン：</b>すべてのプレイヤーは、改造されていない『流星のロックマン3 ブラックエース』または『レッドジョーカー』を使用しなければなりません。</li>
                    <li><b>フォルダールール：</b>各プレイヤーのフォルダには、正確に30枚のバトルカードが含まれていなければなりません。フォルダごとに許可されるギガカードは1枚のみです。不正なデータやカードは固く禁じられています。</li>
                    <li><b>ノイズ形態：</b>すべてのノイズチェンジ形態が許可されます。ファイナライズ形態（ブラックエース／レッドジョーカー）の使用は、通常のゲームプレイを通じてノイズゲージが200%に達した場合にのみ許可されます。</li>
                    <li><b>ブラザーバンド：</b>プレイヤーは試合のために現実世界でブラザーバンドを結ばなければなりません。既存のゲーム内ブラザーの使用は許可されていません。</li>
                    <li><b>紛争：</b>接続が切断された場合、WAZAの役員が試合データを確認して結果を決定します。すべての管理者の決定は最終的なものです。</li>
                </ul>
            `
        }
    };
    
    // --- UI TEXT ---
    const uiText = {
        en: {
            mainTitle: "MMSF3 Grand Tournament",
            navAbout: "About",
            navSchedule: "Schedule",
            navBrackets: "Brackets",
            navRanking: "Ranking",
            navFormat: "Format",
            navRules: "Rules",
            footerText: "This website is for demonstration purposes only. Mega Man Star Force is a property of Capcom."
        },
        jp: {
            mainTitle: "流星のロックマン3 グランドトーナメント",
            navAbout: "概要",
            navSchedule: "スケジュール",
            navBrackets: "対戦表",
            navRanking: "ランキング",
            navFormat: "形式",
            navRules: "ルール",
            footerText: "このウェブサイトはデモンストレーション目的で作成されました。『流星のロックマン』は株式会社カプコンの登録商標です。"
        }
    }

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

    // --- FUNCTIONS ---

    /**
     * Updates all static UI text to the selected language.
     */
    function updateUIText() {
        const texts = uiText[currentLang];
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
            const wrapperClass = pageKey === 'format' ? 'content-wrapper format-page' : 'content-wrapper';
            const html = `
                <div class="${wrapperClass}">
                    <div class="content-image" style="${(pageKey === 'format' || pageKey === 'brackets') ? 'display:none;' : ''}">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="content-text">
                        <h2>${data.title}</h2>
                        ${data.content}
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

        // Load the default page content ('about')
        switchContent('about');

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