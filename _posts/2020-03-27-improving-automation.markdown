---
layout: post
title:  "Improving Automation: Working Together"
date:   2020-05-21 07:49:00
categories: automation
draft: true
summary: "Automation can be improved by designing for work with humans rather than alone."
---

I painted a bleak picture of runaway, people-eating automation in [Stop Hitting Yourself: How Automation Is Hurting You](http://onemogin.com/automation/improving-automation.html). It was a bit alarmist, but for good reason. In my experience at many companies and with many customers, automation is treated as a cure-all but is rarely designed to work *with* human team mates. This post is meant to provide guidance on how to overcome this challenge and improve your operations by giving automation some extra capabilities.

{% include automation.html %}

# How To Improve
**To be a good team, the parties on that team must agree to a basic compact wherein they coordinate, work toward shared goals, and prevent breakdown in communications.[^tenchallenges]** The rest of this post is concerned with doing our best with current technology to make automation a part of this deal.

As such, in this post I will be speaking about automation anthropomorphically as *part of a team*. This might feel a bit funny, but doing so encourages us to make it behave less… assholey.

# Amplification Before Automation
Automation removes humans from the process, often entirely. Another option is to provide tools that **amplify** human ability rather than automating humans out of the loop. A user might benefit from executing a command across hundreds of machines but they can still initiate the commands and monitor the output. This approach decreases effort while retaining situation awareness[^funcalloc] and allows for continued evolution and learning of the process. You can automate it more successfully later!

# Automation Exists In A Teams
In [my earlier post](http://onemogin.com/automation/improving-automation.html) I mentioned that automation often comes from a place of frustration. As such it is easy for the author to focus on the outcomes rather than the context in which the automation operates.

To build automation that works well with humans — or even other automation — we need to consider this post's advice **at the time of design**. Many of the improvements suggested will require changes to the automation's approaches, algorithms, and capabilities. Let's discuss how.

## Automation Must Be Designed
The point of automation is to free the human from some parts of a process. Since it's highly unlikely you work alone, that means that other humans will become responsible for working with and caring for the automation in the future.[^jcsauto] To that end you must treat automation they way you'd treat a product. That means talking to stakeholders, getting feedback, and considering ergonomics.[^designofevery]

You're also not done once automation handles it's first operation. Being a part of a [complex system](https://en.wikipedia.org/wiki/Complex_system) means that the automation will need to adjust over time. Working with humans will also mean learning from errors, sanding down rough edges, and generally improving understanding for the operator.[^designofevery]

> An appropriate design should assume the existence of error, it should continually provide feedback, it continually interact with operators in an appropriate way, and it should have a design appropriate for the worst of situations.[^problemauto]

We must also consider the cognitive load of the automation. Is it heard for people to use? If the complexity exceeds exceeds the perceived benefit they may avoid its use all together.[^misuse]

## Automation Must Communicate
Above all, automation must communicate with its human partners to be effective. Consider your automation as another person on the team. What might they say to their team mates as they work? This can improve the [gulf of evaluation](https://en.wikipedia.org/wiki/Gulf_of_evaluation)[^designofevery]. How you do this will depend on your internal capabilities, but here are some suggestions:

* Emit metrics that track current monitored values and critical operations.
* Emit metrics that make clear any goals, thresholds, or limits. These may be fixed values, or values that change with the state machine.
* Emit events around actions, intentions, and decisions.

This feedback is vital for humans in their work and performance.[^ninesteps] Consider building interfaces or dashboards that curate this information, specifically aligned with the goals — e.g. stability, cost, latency - of the operator and the automation.[^autoaware]

As a final note, remember to allow access to the raw information (logs, metrics, events) so the operator can dig in deeply if needed.

## Automation Must Be Predictable
It is generally of advice to [avoid surprise in software](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) because humans will inevitably forget and work with imperfect mental models.[^wrongmental] This is a normal form of energy conservation for humans who can't possibly remember everything at all times. As such we must work to ensure that our automation considers its team mates and acts predictably.

Here are some ways to improve predictability:
* Emit notifications and reasons when goals change, errors occur, or any time when a human might need to be aware of an action.[^designofevery]
* Emit information about the current, past, or next step in the process.
* Consider adding (and emitting notifications for) cool down or observational periods such that the automation can transmit its *intent* to act in time for a human to react.
* Increase urgency as the bounds of control get closer. Do not snap from normal to freaking out in one tick of a loop, do so gradually.

As an aside, another way to improve predictability is to keep things simple. Some ML or AI features promise great benefits, but may be opaque and unpredictable to operators. Take care when evaluating and using such features.

## Automation Must Be Directable
So far we've focused on ways that automation can transmit information about its work. Now we must turn the tables and think about how our automation can receive information and adjust its behavior.

* Adding APIs to your automation that can enable, disable, or influence it's parameters
* Configuring "policies" that adjust the approach or the aggressiveness of actions, with ways to change this easily at runtime
* Messages, APIs, or signaling to sense *other team mates* actions — i.e. other automation or humans — and to react accordingly. If a human intervenes, maybe I should sense this and adjust my actions.

This allows team mates to direct the automation to act in a way consistent with the given context.[^tenchallenges] With these capabilities, working with automation can become a part of the documented process for responding to loss of control. Without them, automation may be forgotten and exacerbate the problem through well meaning but opaque activity.

## Automation Must Be Respectful
We've discussed at length how vital it is for automation to make information about it's work available. We must also, however, balance all that yelling with a respect for the other agents. Humans typically rely on mental models of others to determine what, if anything, needs to be said to keep coordination going.[^tenchallenges] Our automation, being of simple mind, needs our help. Here are some ways we can improve things:

* Use telemetry levels to indicate matters of different importance. Normal operations are no big deal and should be kept to low priority of communication whereas nearing the bounds of control warrants yelling loudly.
* Leverage consolidation and filtering tools that allow dialing up or down the attention given.
* Accept feedback that mutes notifying users, either at the source or through a common filter.
* Incorporating context such as if other team mates are acting can help guide internal decisions about how much and often to direct attention.

# Future And Summary
There are lots more ways that automation can improve if we view it as a team mate. Some of these features, like making automation aware of how *humans* work through modeling and allowing that automation to predict and communicate are still a bit science fiction. The steps above, however, are all practical with today's technology and a bit of forethought!

By incorporating these concerns into our design and maintenance of automation, we can not only create a more harmonious environment, we can look forward to a less toxic, more helpful team mate. A team mate that keeps us informed of what's going on, and backs off when we take over.

I encourage you to check out the citations listed in this and the the [previous post on automation problems](http://onemogin.com/automation/automation/improving-automation.html). My suggestions are just that, and are largely viewed through the lens of an observability wonk. I'm excited to hear what ideas you might have for improving automation.

[^funcalloc]: Raja Parasuraman, Effects of Adaptive Function Allocation on Human Performance
[^misuse]: Raja Parasuraman, [Humans and Automation: Use, Misuse, Disuse, Abuse](https://journals.sagepub.com/doi/abs/10.1518/001872097778543886)
[^tenchallenges]: Klein, Woods, Bradshaw, Hoffman, Feltovich, [Ten Challenges for Making Automation A Team Player](http://jeffreymbradshaw.net/publications/17._Team_Players.pdf_1.pdf)
[^autoaware]: Mica Endsley, [Automation and Situation Awareness](http://www.aerohabitat.eu/uploads/media/Automation_and_Situation_Awareness_-_Endsley.pdf)
[^problemauto]: Donald A. Norman, [The Problem of Automation: Inapporpriate Feedback and Interaction, Not "Overautomation"](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19900004678.pdf)
[^ninesteps]: Woods, Cook, [Nine Steps to Move Forward From Error](https://www.researchgate.net/publication/226450254_Nine_Steps_to_Move_Forward_from_Error)
[^cse]: Rasmussen, Pejtersen, Goodstein, [Cognitive Systems Engineering](https://www.wiley.com/en-us/Cognitive+Systems+Engineering-p-9780471011989)
[^designofevery]: Donald A. Norman, [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)
[^jcsauto]: E. Hollnagel, [The Role of Automation in Joint Cognitive Systems](https://www.sciencedirect.com/science/article/pii/S1474667017376851)
[^wrongmental]: Besnard, Greathead, [When mental models go wrong. Co-occurrences in dynamic, critical systems](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.62.9857&rep=rep1&type=pdf)
