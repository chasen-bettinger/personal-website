---
title: "2025 Offsite Reflection"
description: "Thoughts following a company offsite"
pubDate: "05/10/2025"
heroImage: "/reading.jpg"
---

I'm filled with happiness to see friends that I work with in person after only
being able to interact with them from behind a screen. I love remote work -- it
supports flexibility and silence which enables me to do my best work. Breaking
the habit of opening my laptop and logging into Zoom ironically extends the 
benefits I gain from remote work. With physical interaction, I'm able to form
new relationships otherwise difficult in a fast-moving online-based 
environment. For the people that I regularly work with, I feel like I'm 
able to strengthen our bond; I'm able to gain learn more about what they do and
why they do it. I feel more like I'm part of a community.

Offsites aren't hangout sessions, however. It'd be a waste of an opportunity
to not address material issues with everyone giving their undivided attention
and (hopefully) being present. Out of those things discussed and experienced,
I'm documenting things that stuck out, things I'm curious about, and some
takeaways.

## Distribution is king

A primary challenge in security engineering is meeting people where they are.
I carry the assumption with me that my colleagues wish to do the right thing and
when they error, it's because of a broken process, missing tool, or lack of
education. Creating an error-free environment requires that the audience can
effectively adopt a recommendation. For example, if a system is built with
broken access controls, the solution that corrects this cannot contain friction.
Obstacles translate into rejection.

I've been working on access-related initiatives and the principle of
'distribution is king' has proven to be central to the success of this work. I
tried hard to make the ugly details of the change in access invisible to
engineers by putting all of the new business logic in an internal tool. Real
impact however was unlocked when I introduced a way for engineers to download
and update this tool with zero friction, through homebrew. Material appreciation
was shown immediately.

I didn't fully recognize the breadth of the impact until the offsite. I spoke 
with many colleagues who identified me as 'the {tool_name} guy' and they shared 
geniune appreciation for the productivity they gained by using the tool. 

During a presentation, a question was asked: "Did cab drivers become safer than
they were in the 90s, why/why not?". Seinfield had a skit where he riffed on the
paradoxical experience of riding in a NYC cab during the 90s. "You feel like
you're going to die, but the driver _is_ licensed, so I'm going to be ok,"
Seinfield jokes. Accidents related to riding in a cab have decreased and the
speaker asserts that this is largely because of a change in how the demand for
cab drivers was facilitated. We moved from hailing a cab and praying that your
driver wasn't a maniac towards calling a ride via an app and being able to check
the rating of your driver, allowing you to cancel a ride you deemed as
suspicious. 

Traveling via taxi became safer because the _distribution_ of choosing the
driver changed. My colleagues adopted my suggestions because the _distribution_
of a tool changed. 

Being able to build on top of a behavior is a requirement for adoption.

## AI used in interviews

Software engineering interviews suck. Difficult for the interviewee because of the
endless pit of knowledge they believe they need to acquire (to anticipate random
interview topics). Difficult for the interviewer because signal is non-binary,
and subjective. In an attempt to lower the bar for the interviewee, googling is
allowed where I work during a programming/system design interview. Syntax issue,
documentation, open thought, whatever: you can google it. LLMs? Barred. Why?

The reason for disallowing an LLM to be used in a programming exercise boiled
down to: the objective of the programming exercise is to see the candidate write
all of the code necessary to complete the task during the allotted time. Failure
to do this is effectively a failed interview.

I disagree with this reason -- I'm pro-AI in coding interviews for the following
reasons:

1. AI tools are allowed on the job. I care about the candidate's ability to
deliver value on the job and they're going to use an AI tool to do that.

2. AI tools mostly suck. They're helpful for boilerplate and monotonous tasks
building test harnesses. Outside of that? It's like pairing with a junior
engineer that might randomly change their mind with no notice and for no
reason. 

3. The software engineer job function will change. For the past 10 years,
   engineers have taken on more responsibilities and the industry has tried to
test candidates on their ability to make micro-changes (functions and logic)
given constraints. Looking ahead 10 years, software engineers will need to do
even more and will transition into code organization. Given this, I argue that
continuing to test candidates on their ability to write single functions leads
to poor signal. 

4. I care a lot about how the candidate thinks and approaches a problem, not
   whether or not they have "solved" the problem. 


