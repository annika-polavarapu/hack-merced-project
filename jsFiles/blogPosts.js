document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example posts array
const posts = [
    {
        title: "Prioritizing sleep",
        date: "March 9, 2024",
        content: "Ugh, sleep used to be such a drag. You know the drill - all-nighters, gallons of coffee, and feeling like a zombie the next day. I totally thought that catching some extra 'me' time meant burning the midnight oil, but let me tell you, I was SO wrong. My brain felt like mush, I couldn't focus on anything, and the stress levels were, well, let's just say not cute. Then, I stumbled on this article about sleep, and let me tell you, it was a game-changer. Turns out, prioritizing sleep is like hitting the magic snooze button for your whole life! Now that I actually give myself some shut-eye, I feel sharper, way more focused, and even more productive (who knew, right?). Plus, the brain fog is gone, I can actually deal with life's curveballs without freaking out, and my skin even looks better (score!). Honestly, prioritizing sleep has been a total game-changer. Now I have a regular sleep schedule, I ditch the phone before bed to wind down, and getting enough sleep feels way more like a reward than a chore. Sleep isn't for the weak, it's the ultimate self-care hack for a happier, healthier you!"
    },
    {
        title: "The Power of Exercise",
        date: "March 9, 2024",
        content: "You guys ever feel like a deflated pool toy? That was me before I started actually moving my body. Zero energy, constant sluggishness, and motivation? MIA. Don't get me wrong, hitting the gym wasn't exactly my idea of a good time. But after weeks of dragging myself onto the treadmill (thanks workout buddy!), whoa, what a difference! Now, I'm not talking about turning into a gym rat (although respect to those who are!), but even just some light exercise has been a total game-changer. It's like a natural energy booster! I don't drag through the day anymore, and I can actually focus for more than five minutes at a time. Plus, the stress just melts away after a good sweat session. It's like my brain hits restart and chills out. Here's the best part: exercise actually makes me happier! I know, I know, sounds cheesy, but it's true. Those endorphins they talk about? Totally real. Plus, feeling stronger and more capable in my own body just gives me a confidence boost that lasts way beyond the gym. So yeah, ditch the couch potato life and give exercise a shot. You might surprise yourself at how much better you feel! Even a brisk walk or a quick dance session in your living room can make a difference. Trust me, your body (and mind) will thank you for it!"
    },{
        title: "Building a Support System",
        date: "March 9, 2024",
        content: "Let's be real, life can be a rollercoaster, right? Sometimes you just need someone to scream into the void with, or high five when you finally nail that presentation. That's where the magic of a support system comes in. For the longest time, I went solo - facing everything life threw my way with a stiff upper lip (and maybe a silent tear or two). Big mistake. Building a support system isn't about having a million followers or becoming social media royalty. It's about surrounding yourself with real people who actually get you. The ones who celebrate your wins, no matter how small, and hold your hand through the tough times (because let's face it, there will be tough times). Since building my own squad of awesome humans, life feels a whole lot lighter. I can vent about work woes without judgment, get honest feedback on my crazy ideas, and celebrate victories with people who genuinely care. Plus, knowing I have these folks in my corner makes me braver - more willing to take chances and chase my dreams. So, don't be afraid to put yourself out there! Reconnect with old friends, join a club related to your hobbies, or even explore online communities. You never know who might become your next BFF and turn your solo act into a kickass support system."
    },
    // Add more posts here
];

function displayPosts() {
    const blogPostsElement = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const dateElement = document.createElement('p');
        dateElement.textContent = post.date;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(dateElement);
        postElement.appendChild(contentElement);

        blogPostsElement.appendChild(postElement);
    });
}

// Call displayPosts when the page loads
window.onload = displayPosts;