---
layout: post
title:  "Context Improvement in System Dashboard Design"
date:   2019-04-15 07:49:00
categories: observability dashboards
summary: "A Practitioner's Guide to System Dashboard Design Part 3: Context Improvement."
image: /assets/images/dash-p4-logo.png?233
draft: true
---

With a strong layout and helpful visualizations our next goal is to orient the user with as much context as possible. Failing to provide any context is one of the most common mistakes in creating dashboards (Few 38)[^1]. The context our user needs often comes from other sources not included in our carefully considered charts.

{% include dashboard-guide.html %}

# Human Actions, Control Data
Earlier we discussed the value of time as our X axis in run charts. This is extremely helpful for readers in that it shows change over time, but the passage of time isn’t the _causal_ factor in our data. For that we need more context. Tufte suggests improvement by “smuggling additional variables into the graphic design” (38) to increase the causal explanations for the reader.[^2]

![Sources of change](/assets/images/dash-p4-changes.png)
<br>_Lots of thing can cause change. Pesky ghosts!_

This intersects neatly with system dashboards because _changes_ from humans or automated systems are often the progenitors of system effects. Capturing these events and visualizing them provides our user with

![Range chart example](/assets/images/dash-p4-deploy.png)
<br>_The blue diamond shows that my deploy correlates strongly with a decrease in latency. Yay!_

This [control plane data](https://en.wikipedia.org/wiki/Control_plane) is much lower rate than the signals we measure in our systems. Ensuring that such changes are instrumented and available in the same place as your dashboards signals should be a high priority as it may significantly improve how quickly our users can accomplish their goals.

## Instrumentation: Here Be Dragons
Unfortunately most tools for system dashboards have spotty support for this data, often called "annotations". The events tend to be hard to reuse, untyped, and often assumed _instantaneous_. Some packages support a start and end event for things like deploys which are often time take to be unveiled.

Furthermore, tooling for passing these annotations to your dashboards is spotty and often requires hand instrumenting dozens of disparate systems. Then you must find a way to connect the relevant events into dashboards. Eek!

Some advice on how to implement this well:

* Leverage common outputs like [CloudTrail Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) and CI/CD systems.
* Try and reuse events rather than having users mint their own that only work in their dashboards.
* Mind clutter, too many events is as bad as none!
* Provide a link in the event for your user to follow in any events so that they can click through and find more information. This provides the user context but avoids turning your dashboarding tool into an administrative interface.

# Norms, Goals, and Agreements
Some KPIs have acceptable ranges, internal goals, or even contractual obligations. Including this information in the relevant charts can be a part of the visualization (i.e. a dial or range bar) or included as context within the widget. This context helps the user avoid the requirement of what the chart “should” look like, or what impact the current value may have on stakeholders.

![Range chart example](/assets/images/dash-p3-range.png)
<br>_The current value is 100% we have a clear range through color and position._

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

# Citations
[^1]: Few, Stephen. _Information Dashboard Design_. Analytics Press, 2013.
[^2]: Tufte, Edward R. _The Visual Display of Quantitative Information._ Graphics Press, 1998.
