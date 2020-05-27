---
layout: post
title:  "Alternatives To Automation: Amplification, Complexity, and Control"
date:   2020-05-26 07:49:00
categories: automation
draft: true
summary: "Automating too soon is perilous. Amplification and complexity and help."
---

In [Stop Hitting Yourself: How Automation Is Hurting You](http://onemogin.com/automation/improving-automation.html) I talked a lot of shit about automation. What can we do to avoid toil and error if we cannot automate? Well, we *can* automate but that's coming later. First, let's discuss the middle ground.

{% include automation.html %}

# What Is Complexity?
I am not qualified to discuss the full extent of complexity. I'm still researching and learning about this topic, but I really enjoy David D. Woods take in *Coping With Complexity* which I will try and summarize.

Complexity isn't a *thing*, it is a situation composed of a world, an agent, and a representation. The world is dynamic, interconnected, uncertain, and costly. The agent is one or more of humans and… other stuff like computers. The representation is whatever those agents use to understand and manipulate the world.[^coping]

Complexity is expensive. It makes things hard! Let's discuss one way of *avoiding* complexity.

# The Goal Is Control
In many of the citations I've used in this series the discussion is usually about **control**. The systems we operate hum along, doing their thing, within a desired performance envelope. This envelope is defined by what our customers our willing to accept, what we're willing to pay, and how well the operation works.

Now and then things go wrong and, like a plane blown off course, we steer,  throttle up, or however a plan works to get things pointed in the right direction.

# Amplifying Human Ability
Sticking to airplanes, the human pilot exerts control by operating the various control surfaces on the wings and such. Apparently, I'm not a pilot. Originally these surfaces where operated with ropes and pulleys and required raw human strength. As airplanes got faster, more strength was needed and hydraulics **amplified** human strength. Some modern planes use [fly-by-wire](https://en.wikipedia.org/wiki/Fly-by-wire) to replace all those heavy hydraulics with wires and actuators. This is one example of how humans have engineered increased capabilities to exert control. But it's a cool one because planes are rad.

**Before deciding to remove the human from the loop you should consider amplifying the human's effort.** Take [Terraform](https://www.terraform.io/) or [Puppet](https://puppet.com/) as examples. Both allow a single user to define a desired outcome and affect change across tens of thousands of machines in a fraction of the time.[^terruppet] Critically these and other tools of their shape keep the human "in the loop": deciding on action, monitoring progress, and responding to error. They can still cause incidents — believe me, I've done it plenty — but the human is more likely to be present, aware, and up to speed.

One way to deal with complexity is not to add it. The gist of my argument in [Stop Hitting Yourself: How Automation Is Hurting You](http://onemogin.com/automation/improving-automation.html) is that **creating automation adds complexity**[^ironies]. Before we add this complexity we should consider if we could instead amplify the human's abilities of speed, perception, or attention.

# Autoscaler Example
In [Stop Hitting Yourself: How Automation Is Hurting You](http://onemogin.com/automation/improving-automation.html) we talked about automating an autoscaler. Rather than removing the human, have we tried making a small tool that speeds up, simplifies, or otherwise improves this process? Maybe a small command line tool with best practices as defaults that allows multiple systems to be scaled all at once?

## Tools Can Be Complex Too
The creation of such a tool will obviously require some investment. It will require consideration about best practices, repercussions and outcomes. The adoption of any technology — tool or automation — fundamentally changes the job, the problems, and the future of the operation.

The difference I am advocating here is to include the human in the use of the tool, versus automation which replaces the human. **When we remove the human we remove the only adaptive, safety-creating[^complexsystems] component and replace it, if at all, with a poorly coded analog.** When we amplify, we retain the best human parts.

# Amplify Before You Automate
There are other ways to deal with complexity such as increasing [reliability](https://en.wikipedia.org/wiki/Reliability_engineering) to the point that it's mostly ignored, or [embracing complexity's representation](https://en.wikipedia.org/wiki/Ecological_interface_design). Those are other posts, though.

Amplification via tools allows us to increase output while decreasing, or at least keeping constant, human effort. We retain the best traits of humans while decreasing effort or toil.

[^ironies]: Lisanne Bainbridge, [Ironies of Automation](https://www.ise.ncsu.edu/wp-content/uploads/2017/02/Bainbridge_1983_Automatica.pdf)
[^coping]: David D. Woods, [Coping with complexity, the psychology of human behavior in complex systems](https://www.researchgate.net/publication/238727732_Coping_with_Complexity_The_psychology_of_human_behavior_in_complex_systems).
[^terruppet]: Both also have their faults, but they obviously allow people to control huge fleets of machines.
[^complexsystems]: Richard Cook, [How Complex Systems Fail](https://web.mit.edu/2.75/resources/random/How%20Complex%20Systems%20Fail.pdf)
[^anticipatingchange]: Woods, Dekker, [Anticipating the effects of technological change: A new era of dynamics for human factors](https://www.researchgate.net/publication/247512351_Anticipating_the_effects_of_technological_change_A_new_era_of_dynamics_for_human_factors)
