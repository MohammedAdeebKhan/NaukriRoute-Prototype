const content=document.getElementById("content");
const nav=document.getElementById("nav");
const data={
 recs:[
  {type:"Market Opportunity",title:"Data Analyst",demand:"High Demand",ready:68,time:"3–4 months",tone:"red"},
  {type:"Relevant to Your Field",title:"Marketing Analyst",demand:"High Demand",ready:81,time:"2–3 months",tone:""},
  {type:"Skill Upgrade",title:"Advanced Digital Marketing",demand:"Growing Demand",ready:92,time:"1–2 months",tone:"green"}
 ],
 courses:[
  ["🛢️","SQL for Data Analysis","Beginner","4.8","6 hours"],
  ["🐍","Python for Data Analysis","Intermediate","4.7","12 hours"],
  ["📊","Data Visualization with Power BI","Beginner","4.6","6 hours"],
  ["▣","Excel for Business","Beginner","4.9","5 hours"],
  ["📣","Digital Marketing Fundamentals","Beginner","4.5","7 hours"],
  ["✦","Generative AI Basics","Beginner","4.6","6 hours"]
 ]
};

function shell(title,sub){return `<h1 class="page-title">${title}</h1><p class="subtitle">${sub}</p>`}
function home(){
 return shell("Hi Aditi 👋","Here are your top recommendations.")+
 `<div class="panel hero"><div><small class="muted">YOUR CURRENT PATH</small><h2>Data Analyst <span class="pill green">Good Match</span></h2><div style="width:380px"><div class="progress"><i style="width:68%"></i></div></div></div><div><b>Next Step</b><p>Learn SQL basics</p><button class="btn" onclick="showPage('path')">View Full Blueprint →</button></div></div>
 <h2>Recommended for You</h2><div class="grid3">${data.recs.map((r,i)=>`<div class="rec-card"><span class="pill ${r.tone}">${i+1} · ${r.type}</span><h3>${r.title}</h3><small>${r.demand}</small><div class="progress"><i style="width:${r.ready}%"></i></div><b>${r.ready}%</b><p>◷ ${r.time}</p><button class="btn secondary" onclick="showPage('path')">View Details →</button></div>`).join("")}</div>
 <div class="panel" style="margin-top:22px"><div class="hero"><div><h2>Keep building your future.</h2><p>Follow your roadmap and gain the skills needed to reach your goals.</p></div><button class="btn secondary" onclick="showPage('path')">View My Path →</button></div></div>`;
}
function path(){
 return shell("My Career Blueprint","A personalized plan to help you reach your goal.")+
 `<div class="panel hero"><div><small class="muted">CURRENT GOAL</small><h2>Data Analyst</h2><div class="progress" style="width:440px"><i style="width:68%"></i></div><b>68% ready</b></div><span class="pill green">On Progress</span></div>
 <div class="panel roadmap"><h2>Roadmap</h2>
 ${[["1","Learn SQL Basics","Week 1–4 • Beginner","Start Learning",true],["2","Data Analysis with Python","Week 5–8 • Intermediate","Not Started"],["3","Build 2 Real Projects","Week 9–12 • Project Based","Not Started"],["4","Get Certified (Optional)","Week 13–14 • Recommended","Not Started"],["5","Apply for Internships / Jobs","Week 15+ • Career Growth","Not Started"]].map(x=>`<div class="step"><span class="num ${x[4]?'done':''}">${x[0]}</span><div><b>${x[1]}</b><div class="muted">${x[2]}</div></div><button class="btn ${x[4]?'':'secondary'}" onclick="${x[4]?"showPage('learn')":""}">${x[3]}</button></div>`).join("")}</div>
 <div class="panel" style="margin-top:18px"><h2>Skills You Will Build</h2>${["SQL","Python","Data Analysis","Excel","Data Visualization","Statistics"].map(s=>`<span class="tag">${s}</span>`).join("")}</div>`;
}
function learn(){
 return shell("Learn","Build the skills you need with curated courses.")+
 `<div class="tabs">${["All","Data Science","Business","Marketing","Design","Development","Soft Skills"].map((x,i)=>`<button class="${i===0?'active':''}">${x}</button>`).join("")}</div>
 <div class="course-grid">${data.courses.map((c,i)=>`<div class="course"><div class="icon">${c[0]}</div><h3>${c[1]}</h3><span class="pill ${c[2]=='Intermediate'?'green':''}">${c[2]}</span><p>⭐ ${c[3]} &nbsp; ◷ ${c[4]}</p><button class="btn secondary" onclick="showCourse(${i})">View Course →</button></div>`).join("")}</div>`;
}
function showCourse(i){
 const c=data.courses[i];
 content.innerHTML=`<div class="back" onclick="showPage('learn')">← Back to Learn</div>
 ${shell(c[1],"Learn practical skills and build evidence for your career route.")}
 <div class="panel hero"><div><div class="profile-top"><div class="icon" style="width:70px;height:70px;background:#eaf3ff;display:grid;place-items:center;font-size:30px">${c[0]}</div><div><h2>${c[1]}</h2><p>Recommended for your Data Analyst route</p></div></div></div><button class="btn">Enroll Now →</button></div>
 <div class="detail-grid" style="margin-top:18px"><div class="panel"><h2>About this course</h2><p>This course is mapped to a skill area in your Career Blueprint. It uses practical exercises and real-world datasets to build job-relevant capability.</p><hr><h2>What you'll learn</h2><div class="grid3"><div class="stat">Understand fundamentals</div><div class="stat">Write practical queries</div><div class="stat">Analyse datasets</div></div></div>
 <aside class="panel"><h2>Course Details</h2><p>Level: ${c[2]}</p><p>Duration: ${c[4]}</p><p>Rating: ⭐ ${c[3]}</p><div class="notice">Why recommended: this course addresses a skill gap in your selected career path.</div></aside></div>`;
}
function opportunities(){
 return shell("Opportunities","Find relevant jobs, internships and programs.")+
 `<div class="tabs">${["All","Jobs","Internships","Scholarships","Government","Events"].map((x,i)=>`<button class="${i===1?'active':''}">${x}</button>`).join("")}</div>
 ${[["TCS","Data Analyst","Full-time","Bhopal / Hybrid","Posted 2 days ago"],["zomato","Marketing Intern","Internship","Remote","1 day ago"],[">","Business Analyst","Full-time","Bengaluru","3 days ago"],["A","Data Science Intern","Internship","Remote","5 days ago"]].map(x=>`<div class="opp"><div class="company-logo">${x[0]}</div><div class="grow"><h3>${x[1]}</h3><p>${x[2]} • ${x[3]} • ${x[4]}</p></div><button class="btn secondary" onclick="showOpportunity('${x[1]}','${x[0]}')">View →</button></div>`).join("")}`;
}
function showOpportunity(title,company){
 content.innerHTML=`<div class="back" onclick="showPage('opportunities')">← Back to Opportunities</div>${shell(title,"${company}")}<div class="detail-grid"><div class="panel"><h2>Job Description</h2><p>This representative opportunity demonstrates how NaukriRoute can connect a prepared student profile with a relevant opening.</p><h2>Key Responsibilities</h2><ul class="list"><li>Work with data and reports</li><li>Analyse trends and provide insights</li><li>Support data-driven decisions</li></ul><h2>Eligibility</h2><ul class="list"><li>Relevant education or equivalent preparation</li><li>Analytical and problem-solving skills</li><li>Role-specific technical skills</li></ul></div><aside class="panel"><h2>Match Score</h2><div style="font-size:42px;font-weight:800;color:#18a875">78%</div><span class="pill green">Good Match</span><p>Your profile aligns with this representative role.</p><button class="btn">Apply Now →</button></aside></div>`;
}
function community(){
 return shell("Community","Ask, share and learn with peers and mentors.")+
 `<div class="tabs">${["All","Discussions","Resources","Events","Mentors"].map((x,i)=>`<button class="${i===0?'active':''}">${x}</button>`).join("")}</div>
 <div class="grid2">${[["Rohan Sharma","What are the best resources to learn SQL for beginners?","12","8 replies"],["Priya Mehta","Sharing my Data Analytics roadmap that helped me land an internship!","24","15 replies"],["Arjun Verma","Any tips for building a standout portfolio for data analysis?","18","10 replies"],["Sneha Iyer","Which tools should students learn for data analysis?","31","27 replies"]].map(p=>`<div class="post"><b>${p[0]}</b><p>${p[1]}</p><small>♡ ${p[2]} &nbsp; 💬 ${p[3]}</small></div>`).join("")}</div>`;
}
function profile(){
 return shell("My Profile","Manage your information and career preferences.")+
 `<div class="panel"><div class="profile-top"><div class="profile-pic">A</div><div><h2>Aditi Sharma</h2><p>aditi.sharma@email.com • Bhopal, India</p></div><button class="btn secondary" style="margin-left:auto">Edit Profile</button></div></div>
 <div class="panel" style="margin-top:18px"><h2>About Me</h2><p>I am a B.Com student interested in data analysis and business analytics. I enjoy working with data and solving real-world problems.</p><div class="grid3"><div class="stat"><b>Education</b><br>B.Com (Final Year)</div><div class="stat"><b>Interests</b><br>Data Analysis, Business, Finance</div><div class="stat"><b>Career Goal</b><br>Data Analyst</div></div><div style="margin-top:12px">${["SQL","Python","Data Analysis","Excel","Data Visualization","Communication"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>`;
}
function showPage(page){
 document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 const pages={home, path, learn, opportunities, community, profile};
 content.innerHTML=pages[page]();
 window.scrollTo({top:0,behavior:"smooth"});
}
nav.addEventListener("click",e=>{const b=e.target.closest("button");if(b)showPage(b.dataset.page)});
showPage("home");
