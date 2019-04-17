---
layout: post
title:  "Context Improvement in System Dashboard Design"
date:   2019-04-17 07:49:00
categories: observability dashboards
summary: "A Practitioner's Guide to System Dashboard Design Part 4: Context Improvement."
image: /assets/images/dash-p4-logo.png?233
---

With a strong layout and helpful visualizations our next goal is to orient the user with as much context as possible. Failing to provide any context is one of the most common mistakes in creating dashboards (Few 38)[^1]. The context our user needs often comes from other sources not included in our carefully considered charts.

{% include dashboard-guide.html %}

# Basics: Text

Humans are pretty good at reading. Those that make the dashboards often lean toward terseness. In Part 2 we covered [Scale and Units](http://localhost:4000/observability/dashboards/practitioners-guide-to-system-dashboard-design-p2.html#scale-and-units). Labeling our data and considering the _form_ of that label can yield comprehension improvements.

But let's not get too deep here. Label your damn charts better! There's no charge for letters. Imagine you're a new operator who's just been paged for the first time. What do you need to know?

![Comparison of charts with and without labels](/assets/images/dash-p4-text.png)
<br>_The left chart has no effort. The right side has reasonable labels to help the user understand the context of the visualization._

# Basics: Next Steps

If a user wants to know more about this visualization, how can they get there? A common pattern is clicking on the title to open a fullscreen version that may allow further slicing and dicing. This a convenient place to put data tables or other helpful information:

![Full screen with table](/assets/images/dash-p4-fullscreen.png)
<br>_Opening the chart in full screen gives us new tools since the user has demonstrated an interest in further digging._

Seeing a bad thing in a chart might lead to another tool or to notifying teammates. Why not embed these into a menu on the chart?

![Chart action menu example](/assets/images/dash-p4-chart-actions.png)
<br>_A menu could take you to an exception catcher, Slack sharing, or beginning the incident process._


# Human Actions, Control Data
Earlier we discussed the value of time as our X axis in run charts. This is extremely helpful for readers in that it shows change over time, but the passage of time isn’t the _causal_ factor in our data. For that we need more context.

![Sources of change](/assets/images/dash-p4-changes.png)
<br>_Lots of thing can cause change. Pesky ghosts!_

Tufte suggests improvement by “smuggling additional variables into the graphic design” (38) to increase the causal explanations for the reader.[^2] This intersects neatly with system dashboards because _changes_ from humans or automated systems are often the progenitors of system effects. Capturing these events and visualizing them provides our user with crucial insights into what's being done that may correlate with system behavior.

![Range chart example](/assets/images/dash-p4-deploy.png)
<br>_The blue diamond shows that my deploy correlates strongly with a decrease in latency. Yay!_

This [control plane data](https://en.wikipedia.org/wiki/Control_plane) is much lower rate than the signals we measure in our systems. Ensuring that such changes are instrumented and available in the same place as your dashboards signals should be a high priority as it may significantly improve how quickly our users can accomplish their goals.

## Instrumentation: Here Be Dragons
Unfortunately most tools for system dashboards have spotty support for this data, often called "annotations". The events tend to be hard to reuse, untyped, and often assumed _instantaneous_. Some packages support a start and end event for things like deploys which are often stepped, taking time to complete.

Furthermore, tooling for passing these annotations to your dashboards is spotty and often requires hand instrumenting dozens of disparate systems. Then you must find a way to connect the relevant events into dashboards. Eek!

Some advice on how to implement this well:

* Leverage common outputs like [CloudTrail Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) and CI/CD systems.
* Try and reuse events rather than having users mint their own that only work in their dashboards.
* Mind clutter, too many events is as bad as none!
* Provide a link in the event for your user to follow to find more information. This provides the user context but avoids turning your dashboarding tool into an administrative interface. Less is more if they can click on it.

# Norms, Goals, and Agreements
Some KPIs have acceptable ranges, internal goals, or even contractual obligations. Including this information in the relevant charts can be a part of the visualization (i.e. a dial or range bar) or included as context within the widget. This context helps the user avoid the requirement of what the chart “should” look like, or what impact the current value may have on stakeholders.

![Example of an SLO value in a chart](/assets/images/dash-p4-slo.png)
<br>_The SLO for our service is included as a watermark in the chart._

Many tools support this type of watermarking. Adding them provides additional context to the reader so that the time series isn't just an arbitrary value, but a comparison to our expectations. We can extend this further with time shifts, moving averages, or forms of anomaly detection to draw in expected values:

![Example of guidance via time shifting](/assets/images/dash-p4-normal.png)
<br>_Here's what normal looks like. We seem ok!_

Where a norm or expectation is violated, preemptively highlighting the information for the user so that their eye is drawn to the most important information (Few, 54)[^1].

![A highlighted SLO violation](/assets/images/dash-p4-highlight.png)
<br>_We seem to be violating the SLO on this instant chart!_

# Flagging Alerts or Other Bad State
A common use of system dashboards is to diagnose failure, especially in automated monitoring. Our earlier control-rate context can be combined with data from the alerting system. When and how did this fire?

![Example of alert context](/assets/images/dash-p4-bad.png)
<br>_Timeline annotations for alerts, highlighted violations, and coloration of values over a threshold!_

This information helps our responder understand what brought about the alert, helping them orient to the problem.

# Projections or Other Synthetic Data
Much of the data we present is direct measurement from our systems. Because of this, you should take special care when presenting data that is projected, predicted, or otherwise synthesized so that the user understands where to place their trust. The [Consumer Financial Protection Bureau provides guidance of deemphasizing such data](https://cfpb.github.io/design-manual/data-visualization/emphasis.html#projected-values).

An example of this consideration is the [fan chart](https://en.wikipedia.org/wiki/Fan_chart_(time_series)).

![](/assets/images/dash-p4-fan.jpg)
<br>_The estimated value and the range of possible future values helps the user see what may happen._

# Review
* Our job doesn't stop with just time series. Users need context to understand what else is going on.
* Colocating event data into time series charts helps our user know what might've changed.
* The data in our charts can be improved with normal, expected, or objective values to orient the user.
* Coupling alert information can speed incident response.
* Using any sort of projection requires careful visualization.

# Summary
Wow, that’s a lot of words about slapping charts onto a page! I've learned a lot about how to make _good_ dashboards that help my users. Much of this was contrary to my past opinions and advice I've given. Beyond my own growth much of this advice shows how much our tools need to improve, especially in the area of context.

This stuff is important, as in many organizations these dashboards serve as the primary source of information for the health, effectiveness, and sheer _upness_ of critical services. They are also a cultural watering hole for critical functions. Dashboards and charts are resources that multiply the creator’s effort. A few days of thoughtful design can repay as thousands of hours of engineers, leadership, and/or users that are well informed. In many cases these can result in improved response time to problems.

That’s worth your time, right?

I hope you’ve enjoyed this guide as much as I've enjoyed research and writing it. Please check out the sources cited below each part for more in depth reading on this subject.

{% include dashboard-guide.html %}

# Citations
[^1]: Few, Stephen. _Information Dashboard Design_. Analytics Press, 2013.
[^2]: Tufte, Edward R. _The Visual Display of Quantitative Information._ Graphics Press, 1998.
