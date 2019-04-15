---
layout: post
title:  "Presentation and Accessibility in System Dashboard Design"
date:   2019-04-15 07:49:00
categories: observability dashboards
draft: true
---

After [part 1](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design.html) we’ve got a nice grid and proper visual weighting within that grid, we’re on to thinking about the presentation of the data to our user. This is where things often go awry, as many a pixel has been lit in pursuit of catchy graphics. Keep your design decluttered and consistent.

Our guiding principle must be the user’s goals and the integrity of the data we’re displaying. Since this will vary widely — counts of users, fleeting time spent in garbage collection, and mercurial error counts — we must build up a framework we can use to make choices.

_Thanks to [Lita Cho](https://twitter.com/litacho), [Shawn Moore](https://twitter.com/sartak), [Rajesh Raman](https://twitter.com/RealRajeshRaman), and [Joe Ross](https://twitter.com/robusteza) for reviewing this post._

{% include dashboard-guide.html %}

# Choice of Data, Gardening

You might expect this piece to tell you what specific data to put in your dashboard. Well, fair reader, that’s mostly up to you. Remember our users and their goals from [part 1](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design.html). The important signals for your service are up to you and the needs of your users. To that end, you must use your list and decide what best fits the bill for what Few describes as the four stages of monitoring information: (32)[^1]

1. Updating high-level situational awareness.
1. Identifying and focusing on particular items that need attention.
1. If action is required, accessing additional information to determine appropriate information.
1. Response.

In general the [RED method](https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/) and/or the [USE method](http://www.brendangregg.com/usemethod.html) provide with the best signals for high level service function and awareness. Optimally, you should only use key performance indicators (KPIs) as a dashboard is for situational awareness and not for data discovery (Few 30-31)[^1]. That said, there are plenty of use cases where more specific information is needed outside of common KPIs. Refer back to your goals for help when you aren’t sure. Does the user need this to fulfill his/her goals?

We should also remember that these dashboards are often tracking systems that change frequently. You’ll need to add occasional one-off charts or temporary widgets to track new and interesting KPIs or just data that is important for current issues.

Your organization should build in time to regularly look at dashboards with a critical eye and sweep away any artifacts that are no longer useful. Check that one chart you added back when you were leaking file descriptors and ask if it’s really needed anymore. You know which one I’m talking about.

# Effectiveness Of Visualization

When you open the palette of widgets for your dashboard, there are probably lots of options. Temptation is high to use the fancy ones! But not all of these are equal, as humans do not perceive all forms of visual information the same. Our user is trying to quickly orient themselves, so our job is to present things in the most efficient way. Here’s a ranked list of accuracy in human quantitative perceptual tasks:

![Ranking of perceptual accuracy.](/assets/images/dash-p2-accuracy.png)
<br>_Ranking of perceptual tasks in order of accuracy._

These rankings (Mackinlay, 125)[^2] provide a handy guide for determining how easily our reader may be able to process the information we’re presenting. This provides an explanation for the prevalence of line charts which use a combination of position, angle, and color. Some visual components are actually processed subconsciously using pre-attentive processing. The careful use of color, form, position and motion can greatly ease and speed up important information in a dashboard (Few, 80)[^1].

![Preattentive Attributes Example!](/assets/images/dash-p2-preattentive.png)
<br>_Examples of preattnetive attributes You can see these without even thinking about it!._

Moving a bit deeper into the form, Cleveland and McGill (830)[^3] ranked tasks by accuracy for us humans, finding position along a *common scale* more accurate than on non-aligned scales. Few (40-41) reinforces this by specifically advising the use of units and appropriate detail for data to avoid unnecessary computations for the user.  For this reason it is best to use common scales, axis and units where possible.

![Alignment and Unit Axes Example](/assets/images/dash-p2-axes-units-align.png)
<br>_Three charts of the same data, without units, with units and no longer aligned. The left and middle chart are easy to compare, the middle is easier to understand Alignment and units matter._

With this information you should be able to more effectively choose visualizations, picking those that help your reader quickly perceive the data.

[TKTK insert some help in picking visualizations]

# Time
We’re using run charts heavily, so we should take care with how we present time. In short, charts should use a common time window. If the first chart shows a slice of 1h, anchored by “now” then so should they all. This is especially true when there is a time selector or other “global” control involved. Any deviation from this should be clearly labeled as such. Recall our earlier points about alignment!

Many dashboard tools provide a helpful “cursor” when you are hovering your mouse over a chart, pointing to that same instant in other charts nearby. This can both orient the user’s understanding of time as well as make clear any deviations in the relationship between time and space, as evidenced in this example where one chart is wider than others:

![Cursor demonstration in wide charts](/assets/images/dash-p2-cursor.png)
<br>_The bottom chart is wider than the top two, but the vertical bar "cursor" keeps us aligned._

Widgets or charts that do not adhere to the same time/space relationships should clearly communicate their temporal choices either through visual differences (i.e. a “single value” widget) or clear labeling.

## Sneaky Aggregation
Be aware that many visualizations will need to deal with aggregation that happens _automatically_.

For systems work our dashboards must deal with wildly varying time windows as our users scoot around. The default for most system dashboards is a “current” view showing something ranging from the last hour to the last fifteen minutes. Assuming ten second intervals, every hour will contain 360 data points! Because there are only so many usable pixels for each of our precious little charts, dashboarding tools must make decisions about how to fit all those data points in a narrow in a small box. This is usually done via aggregation: showing an average, sum, or something similar. Consult your tool’s documentation for how this works! We’ll cover concerns about this when we talk about specific chart types.

## Aside: Rates and Sums

This is, in my experience, one of the most asked about problems in system dashboards. Showing a counter as either a rate or a sum can have a large effect on the user’s understanding. If you’re viewing the number of errors as a rate then each point on the chart will be the summed count of errors divided by the time elapsed. Viewing as a sum will, of course, be the sum.

Each of these views have interesting effects on the data. At longer time scales the rate will be smoothed out by a larger denominator of time. Sums on the other hand will grow because they are totaling up more time.

**When using rate or sum it is advised that you make the distinction very clear from the title of the chart.**

## Warning: Missing Data

If something goes awry in your measurements you may miss some data points. This can be problematic if your user is assuming regular data points! If this happens, be wary of interpolation because different tools deal with this in different ways. It might not be obvious that data is missing.

# General Guidance

Some other great bits:

* Favor soft colors found in nature. Save the use of vivid, attention grabbing colors for thresholds or other health information to which you want to call attention. [Stephen Few’s Practical Rules for Using Color in Charts](http://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf) is an excellent guide.
* Mute or eliminate background grids, when possible. Consider lightening them. Keep the [principle of closure](https://en.wikipedia.org/wiki/Principles_of_grouping#Closure) in mind and eliminate some of those boxes.
* Avoid faked perspective, such as in 3D graphics that serve no data purpose.
* Take care with real-world analogs such as dials and gauges. If your data does not actually have lower and upper-bounds, presenting it in a dial is misleading.

# Accessibility
Your user may have difficulty interpreting your dashboards if they are not accessible. The [W3C has lots of content on accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) to ensure all your users have a great experience. Depending on your tools, some of these may be easier than others, but all are worth considering.

* Color blindness is very common, with 1 in 12 men and 1 in 200 women affected by [Red-green color blindness](https://en.wikipedia.org/wiki/Color_blindness#Red-green_color_blindness). This is especially worrisome in dashboards as there is often a heavy reliance on using green for “good” and red for “bad” signaling. Leverage multiple techniques for signaling by leveraging the “effectiveness” section above: size, color, text, or icons.
* Still on color, look to [the W3C’s guidance for a 4.5:1 contrast ratio](https://www.w3.org/TR/WCAG20-TECHS/G18.html) between text and backgrounds. You can also use this as a reason to choose clearly distinct colors for data as well. The [Consumer Finance Protection Bureau](https://www.consumerfinance.gov/) has an excellent [guide on color in visualizations](https://cfpb.github.io/design-manual/data-visualization/color.html).
* Consider screen readers and what they read for your widgets. In addition to descriptive titles, consider additional helper text in the widget. [TKTK our sub-titles] Additionally, consider the export of CSV data with descriptive headers so that users with screen readers have a way to tab through the data.
* Make use of accessible navigation and data enrichment features to leverage browser assistance where applicable with tools like [WAI-ARIA](https://en.wikipedia.org/wiki/WAI-ARIA).
* What is the target display device? A dashboard for a large TV likely has different needs than one used on a 13” laptop display by an on call engineer. Be sure and use your dashboard during the design phase on an appropriate device.

# Summary

{% include dashboard-guide.html %}

# Citations

[^1]: Few, Stephen. _Information Dashboard Design_. Analytics Press, 2013.
[^2]: Mackinlay, Jock D. _Automating the Design of Graphical Presentations of Relational Information._ ACM Transactions on Graphics, Vol. 5, 1986
[^3]: Cleveland, William S., McGill, Robert. _Graphical Perception and Graphical Methods for Analyzing Scientific Data._ American Association for the Advancement of Science, 1985.
