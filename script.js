document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const cursor = document.querySelector('.cursor');

    const commands = {
        help: 'help               list all commands (you\'re looking at it)\n' +
              'whoisroot          learn about me\n' +
              'cv                 list detailed CV\n' +
              'email              reach out to me\n' +
              'twitter            twitter account\n' ,
        whoisroot: `
          <div style="display: flex; align-items: flex-start;">
               <img src="photo1.jpeg" alt="Alex Ekler" style="max-width: 400px; height: auto; margin-right: 10px;" />                  <div style="max-width: calc(100% - 120px);">I am Alex Ekler, a web developer and data analyst, 
            open for collaboration on my Twitter</div>
          </div>`,
        cv: `
            <div class="cv-section">
                <h2>Objective:</h2>
                <p>To develop as a Data Analyst, utilizing my knowledge and experience in data analysis and marketing to improve business processes and make strategic decisions.</p>

                <h2>Education:</h2>
                <p>UniBs University, Faculty of Economics and Computer Technologies</p>
                <p>Degree: Bachelor</p>
                <p>Years of study: 2023 - 2026</p>

                <h2>Roles and Responsibilities:</h2>
                <ul>
                    <li>Conducted data analysis to support marketing strategies.</li>
                    <li>Used Python and SQL to process large datasets.</li>
                    <li>Created data visualizations using Tableau and Power BI to present key performance indicators.</li>
                    <li>Developed recommendations based on analytical findings to enhance project effectiveness.</li>
                </ul>

                <h2>Skills:</h2>
                <ul>
                    <li>Programming: Python, SQL</li>
                    <li>Data Visualization: Tableau, Power BI</li>
                    <li>Data Analytics: Trend analysis, report generation, forecasting model building</li>
                </ul>

                <h2>Professional Development:</h2>
                <ul>
                    <li>Courses on edx.org in data analysis, marketing analytics, Python, and SQL.</li>
                    <li>"Data Science and Machine Learning Essentials" - edX</li>
                    <li>"Marketing Analytics" - edX</li>
                </ul>

                <h2>Additional Information:</h2>
                <ul>
                    <li>Continuous skill improvement through online courses and self-study.</li>
                    <li>Ability to work in a team and independently solve complex tasks.</li>
                </ul>

                <h2>Languages:</h2>
                <ul>
                    <li>Ukrainian (native)</li>
                    <li>English (good level)</li>
                    <li>Italian (advanced level)</li>
                </ul>
            </div>`,
        email: 'You can reach me at: alexeklersh@icloud.com',
        twitter: 'Opening Twitter @SaintEkler...',
        ls: 'alex-ekler    my-files'
    };

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (commands[command]) {
                if (command === 'exit') {
                    window.location.href = 'https://alexekler.com';
                } else if (command === 'twitter') {
                    window.open('https://x.com/SaintEkler', '_blank');
                    output.innerHTML += `<div class="output-line user-command">guest:ekler-mac~$ ${command}</div><div class="output-line console-response">${commands[command]}</div>`;
                } else if (typeof commands[command] === 'function') {
                    output.innerHTML += `<div class="output-line user-command">guest:ekler-mac~$ ${command}</div><div class="output-line console-response">${commands[command]()}</div>`;
                } else {
                    output.innerHTML += `<div class="output-line user-command">guest:ekler-mac~$ ${command}</div><div class="output-line console-response">${commands[command]}</div>`;
                }
            } else {
                output.innerHTML += `<div class="output-line user-command">guest:ekler-mac~$ ${command}</div><div class="output-line console-response">Command not found. Type 'help' for a list of commands.</div>`;
            }
            input.value = '';
            window.scrollTo(0, document.body.scrollHeight);
        }     
    });
});
