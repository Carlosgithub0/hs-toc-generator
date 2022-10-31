const btnGenerateToc = document.querySelector("#btnGenerateToc");
const btnOldBasic = document.querySelector("#btnOldBasic");
const btnOldComplex = document.querySelector("#btnOldComplex");
const btnNewBasic = document.querySelector("#btnNewBasic")
const textOld = document.querySelector("#textOld"); 
const textNew = document.querySelector("#textNew");
const textView = document.querySelector("#textView");
const search = /<(h[23])>(.*)<\/\1>/gi; // should get h2 and h3 headers only, plus content inside

generateSampleBasic();

textView.innerHTML = textOld.value;

/* Button */
function generateToc(){
  /* Structure:
  1. Toc -> tocContentBefore, tocContent, tocContentAfter
  2. textContent 
  */
  tocContentBefore = `<div class="table-of-content">\n<p><b>Table of Contents</b></p>\n<ol>\n`
  tocContent = ""
  tocContentAfter = `</ol>\n</div>\n\n`
  textContentNew = textOld.value

  // Assemble TOC + full blog text with anchors
  function assembleResult(){
    textNew.value = tocContentBefore + tocContent + tocContentAfter + textContentNew;
    textView.innerHTML = textNew.value; // Show result in User View panel
  }

  // Generate TOC
  for (const match of textOld.value.matchAll(search)) {
    const ref = match[2].replaceAll(" ", "-").toLowerCase();
    tocLine = "<li><a href=\"#" + ref + "\">" + match[2] + "</a></li>";
    tocContent += tocLine + "\n"; 
    }

  // Add anchors to text (textContentNew)
  for (const match of textOld.value.matchAll(search)) {
    const ref = match[2].replaceAll(" ", "-").toLowerCase();
    anchorLine = "<a id=`#" + ref + "` data-hs-anchor='true'></a>\n" + match[0] + "\n";  
    textContentNew.replace(search,anchorLine);
    }

  assembleResult();
    
}

function generateSampleBasic(){
textOld.value = `<p>p text</p>
<h2>h2 Text</h2>
<p>p text 1</p>
<h3>h3 Text 1</h3>
<p>p text 2</p>
<p>p text 3</p>
<h3>h3 Text 2</h3>
<p>p text 4</p>`
}

function generateSampleComplex() {

    textOld.value=`<br>
    <p>We introduced the Hi!5 Sabbatical initiative to Monterail in June 2019. Three years and almost 20 leaves later, we take a step back to reflect on how it’s been - and what’s coming next.</p>
    <!--more-->
    
    <a id='what-is-hi5' data-hs-anchor='true'></a>
    <h2>But What Is The Hi!5 Sabbatical Leave?</h2>
    <p>First, a bit of context. Any Monterailian who has been in the company for five years can enjoy the Hi!5 - a paid, extra month-long leave to be used freely.</p>
    <p>It’s possible to combine this benefit with regular time off, and people have used it to <a href='https://www.monterail.com/blog/hi5-at-monterail-grzegorz-hajdukiewicz-sabbatical-leave-story' rel='noopener' target='_blank'>practice Yoga in the mountains</a>, <a href='https://www.monterail.com/blog/hi5-at-monterail-marzena-kawa-sabbatical-leave-story' rel='noopener' target='_blank'>explore Italy</a>, <a href='https://www.monterail.com/blog/hi5-at-monterail-pawel-hawrylak-sabbatical-leave-story' rel='noopener' target='_blank'>rest in the Balkans</a>, <a href='https://www.monterail.com/blog/hi5-at-monterail-kasia-tatomir-rebes-sabbatical-leave-story' rel='noopener' target='_blank'>get married</a>, and much more.</p>
    <p>As of writing, 19 Monterailians took their sabbaticals - seven of them in 2022, and more are planned. For more on the history and the reasoning behind Hi!5, read <a href='https://www.monterail.com/blog/sabbatical-leave-monterail-culture' rel='noopener' target='_blank'>Why We Introduced Sabbaticals at Monterail</a>, by Co-Founder Bartosz Rega.<img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/blog/Blog%20body%20images/hi5%20package.jpg' alt='hi5 package' width='667' height='889' loading='lazy' style='height: auto; max-width: 100%; width: 667px;'></p>
    <a id='how-to-prepare-sabbatical' data-hs-anchor='true'></a>
    <h2>How to Prepare For a Sabbatical?</h2>
    <p>When reading histories about leaves, there is a huge focus on the time spent resting. And rightly so - that’s where the breathtaking Eurotrip pictures are!</p>
    <p>But the 'before' is interesting too. How does one prepare for the sabbatical, ensuring everything will be smooth for clients and other stakeholders?</p>
    <p>It may sound surprising, but there is no red tape involved in taking the month-long leave at Monterail. The rules are the same as when we take normal vacation time, making the process remarkably simple.</p>
    <p class='important'>'The key for a successful leave is giving the team heads up so we can comfortably plan around it, and people are respecting the rules,' sums up Chief Operations Officer, Katarzyna Tatomir-Rebeś.</p>
    <a id='benefits-planning' data-hs-anchor='true'></a>
    <h3>Benefits of Planning</h3>
    <p>For Grzegorz Hajdukiewicz, Chief Delivery Officer, planning the sabbatical provided surprising benefits: it forced him to clean up his working habits and restructure his work.</p>
    <p>'When I was planning my sabbatical, I did a self-review covering my responsibilities and who could take them on. I ended up uncovering some tasks that I could have delegated before, such as daily spreadsheet checks.'</p>
    <p>More broadly, it meant strengthening the decision-making process around him by making it less reliant on individuals.</p>
    <p class='important'>'If you want people in the company to take long breaks, their decisions can’t be based on intuition, it has to be data-oriented. Because people have different intuitions, which could cause different results,' says Grzegorz.</p>
    <a id='granting-perspective' data-hs-anchor='true'></a>
    <h3>Granting a New Perspective</h3>
    <p>And for how long does one prepare? For Chief Growth Officer, Marta Klimowicz, who took a combined two-month leave, it was over one month of organization.</p>
    <p>'It’s necessary to identify all responsibilities and who will be their owner during that period,' she explains.</p>
    <p>It’s a lot of work, but it allowed her to truly enjoy time off without leaving any gaps behind.</p>
    <p>She highlights that, after five years working in one place, a month-long break is a great opportunity to reflect on what has happened.</p>
    <p class='important'>'In five years, the company changes a lot. The organization structure and team composition, all of it shifts. When you are involved in the daily operations, you don’t have time to pay attention to these changes,' Marta adds.</p>
    <p>Being immersed in work also makes us forget about how we changed during that period. How far we have come since we started.</p>
    <p>'You don’t have time to recognize this path of advancement, remember the achievements of this journey. The sabbatical gives you a healthy distance to acknowledge how great the journey has been.'</p>
    <p>And this new headspace opens us up to great questions that help both us as individuals and members of the team: 'You start thinking ‘where am I, where is the company, what should be my role, how can I contribute?’'</p>
    <a id='bringing-fresh-ideas' data-hs-anchor='true'></a>
    <h3>Bringing Fresh Ideas</h3>
    <p>Head of People and part of the core team that created Hi!5, Marta Dziergwa experienced similar reflections after her leave.</p>
    <p>'A month of time off gave me the possibility to look at things from a distance, slow down, and better understand what I am happy about and what I’d like to work on. Now I am back with new energy and ideas and it feels great,' she says.</p>
    <p class='important'>And Marta noticed the same energy from peers returning from their retreats, bringing new ideas and figuring out ways to introduce changes that were latent in their minds for a long time.</p>
    <p>Katarzyna jokes that colleagues that returned from their leaves acted like a healthy version of the 'Everything is fine' meme. Collected and serene, no matter what.</p>
    <p>'After five weeks off, I was pretty calm. Being so rested gave me the ability to make decisions with tranquility,' says Katarzyna.</p>
    <a id='recharging-batteries' data-hs-anchor='true'></a>
    <h3>Recharging Batteries</h3>
    <p>Also necessary, of course, is resting after a crunch period, as is the case of Robert Szczęsny, our Office Manager, who immersed himself in our <a href='https://www.monterail.com/blog/monterail-supports-ukraine' rel='noopener' target='_blank'>support efforts for Ukraine</a>.</p>
    <p>'My Sabbatical came after six months of very intense work. For the first days, I tried to just rest, and only by the end of the first week I noticed how tired I was,' he recounts.</p>
    <p>He spent his six weeks off visiting lighthouses, going to the theater, meeting dear friends, and enjoying the water park.</p>
    <p class='important'>'When I organize a party or research gift ideas, I always check what other companies are doing and what their employees think about that offering. Hands-down, the one thing that is always appreciated is free time because free time is a gift not many can afford or it's not something usually given away,' he says.</p>
    <a id='tips' data-hs-anchor='true'></a>
    <h3>Tips From the Team</h3>
    <p>And how about pro tips from former Hi!5vers? The consensus is: don’t plan too much!</p>
    <blockquote>
    <p>'Don’t feel responsible for using the time efficiently and don’t fall for the ‘I have to plan a trip around the world’ trap.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/_morizon/grzegorz-hajdukiewicz.png' alt='grzegorz-hajdukiewicz' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Grzegorz Hajdukiewicz</span> <span class='blockquote-author__role'>Chief Delivery Officer<br>at Monterail</span></div>
    </blockquote>
    <blockquote>
    <p>'I didn’t want to plan too much because I wanted to be able to improvise if I heard about something interesting during the Sabbatical, and that paid off!'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/monterail_employees/robert-szczesny.png' alt='robert-szczesny' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Robert Szczęsny</span> <span class='blockquote-author__role'>Office Manager <br>at Monterail</span></div>
    </blockquote>
    <blockquote>
    <p>'While preparing for the Sabbatical, we would have repeating conversations about it. That made it easier for me to transition to ‘leave mode’ once it started.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/marta-klimowicz.png' alt='marta-klimowicz' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Marta Klimowicz</span> <span class='blockquote-author__role'>Chief Growth Officer <br>at Monterail</span></div>
    </blockquote>
    <a id='company-perspective' data-hs-anchor='true'></a>
    <h2>Sabbatical Planning - The Company Perspective</h2>
    <p><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/blog/Blog%20body%20images/hi5%20package%20envelope%20detail.jpg' alt='hi5 package envelope detail' width='667' height='528' loading='lazy' style='height: auto; max-width: 100%; width: 667px;'></p>
    <p>From the company’s perspective, long leaves are tricky. It’s not just you and your team. There are multiple projects, deadlines, budgets, and much more to take into account, all interacting with each other - the whole <a href='https://www.monterail.com/blog/resource-planning-minizes-risks' rel='noopener' target='_blank'>Resource Planning</a>&nbsp;Tetris.</p>
    <p>Grzegorz points out a fundamental difference between task-based and strategy-based work: 'In management and strategy, four people can do the work of five. But when you are in the delivery, changes end up affecting velocity.'</p>
    <p>In a way, that is not new: 'Delivery velocity is changing all the time, for example with sick days and vacations, so our clients understand that,' Grzegorz adds.</p>
    <p>However, respecting clients’ times and deadlines is non-negotiable. So planning around leaves in task-based roles requires special attention.</p>
    <p>'For projects, in particular, it can be a challenge to have a developer leave for four weeks or more,' exemplifies <span>Katarzyna</span>.</p>
    <p class='important'>To counteract that, there are soft rules such as no more than three devs should leave for Sabbatical at the same time. The same goes for two people in similar roles.</p>
    <p>But those are loose, case-by-case basis rules. When there is a possible conflict, the solution is usually very simple, with compromises such as one person leaving two weeks before or two weeks after their initial plan.</p>
    <p>With all those variables in place, it would seem that the Sabbatical would give the Operations teams nightmares, but that’s not the case. It’s a piece of the puzzle and not the biggest one.</p>
    <p>'The daily work of operations involves resource planning that is much more complex than Sabbatical leaves,' says <span>Katarzyna</span>.</p>
    <a id='hi5-impact' data-hs-anchor='true'></a>
    <h2>And What’s Hi!5’s Impact?</h2>
    <p>Since its inception, the goal of Hi!5 has not changed. It can be seen as an investment, but it’s not a stiff initiative surrounded by KPI metrics. It’s about flexibility. In other words:</p>
    <blockquote>
    <p>'The Hi!5 Sabbatical is a thank you note to people that decided to stay with us for 5 years.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/_cooleaf_landing/kasia-tatomir-rebes.png' alt='kasia-tatomir-rebes' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Katarzyna Tatomir-Rebeś</span> <span class='blockquote-author__role'>Chief Operations Officer<br>at Monterail</span></div>
    </blockquote>
    <blockquote>
    <p>'Hi!5 shows we support longer relationships not only with clients but also with the team. It proves we advocate work-life balance, just as we adopted <a href='https://www.monterail.com/blog/monterail-hearme' rel='noopener' target='_blank'>Hear Me App to prioritize Mental Health</a>.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/marta-klimowicz.png' alt='marta-klimowicz' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Marta Klimowicz</span> <span class='blockquote-author__role'>Chief Growth Officer <br>at Monterail</span></div>
    </blockquote>
    <blockquote>
    <p>'Hi!5 is one of the greatest initiatives we have in Monterail. I’m really grateful that at some point in the company's history we created something like that.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/monterail_employees/robert-szczesny.png' alt='robert-szczesny' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Robert Szczęsny</span> <span class='blockquote-author__role'>Office Manager <br>at Monterail</span></div>
    </blockquote>
    <blockquote>
    <p>'I really appreciate having this bonus time off as it had a great effect on my well-being.'</p>
    <div class='blockquote-author'><img src='https://1667658.fs1.hubspotusercontent-na1.net/hubfs/1667658/legacy/images/employees/marta-hnatko.png' alt='marta-hnatko' width='123' style='width: 123px; margin: 0px 0px 28px;'> <span class='blockquote-author__name'>Marta Dziergwa</span> <span class='blockquote-author__role'>Head of People <br>at Monterail</span></div>
    </blockquote>
    <a id='what-is-next' data-hs-anchor='true'></a>
    <h2>And What’s Next?</h2>
    <p>Before wrapping up, the much-anticipated question: what about the Hi!10, Hi!15 initiatives and beyond? Marta Dziergwa confirms the People team is currently brainstorming some Hi!10 ideas that seem promising.</p>
    <p>'As Hi!5 is about showing appreciation to those who worked with us for five years, we want to prepare something super nice for those who worked in Monterail for ten years,' says Marta.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>`
}

function generateIdealBasicResult(){
textNew.value = `<div class="table-of-content">
<p><b>Table of Contents</b></p>
<ol>
<li><a href="#h2-text">h2 Text</a></li>
<li><a href="#h3-text-1">h3 Text 1</a></li>
<li><a href="#h3-text-2">h3 Text 2</a></li>
</ol>
</div>

<p>p text</p>
<a id="#h2-text" data-hs-anchor='true'></a>
<h2>h2 Text</h2>
<p>p text 1</p>
<a id="#h3-text-1" data-hs-anchor='true'></a>
<h3>h3 Text 1</h3>
<p>p text 2</p>
<p>p text 3</p>
<a id="#h3-text-2" data-hs-anchor='true'></a>
<h3>h3 Text 2</h3>
<p>p text 4</p>
`
  textView.innerHTML = textNew.value;
  
  }

btnGenerateToc.addEventListener("click", () =>
generateToc(btnGenerateToc)
);

btnOldBasic.addEventListener("click", () =>
generateSampleBasic(btnOldBasic)
);

btnOldComplex.addEventListener("click", () =>
generateSampleComplex(btnOldComplex)
);

btnNewBasic.addEventListener("click", () =>
generateIdealBasicResult(btnNewBasic)
);