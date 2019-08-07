---
layout: post
title:  "Observability Crash Course"
date:   2019-08-07 07:49:00
categories: observability dashboards
summary: "Are you just getting started with observability or looking to spin up others? Here's some reading material to help!"
---

The title is succinct, but in practice an organization’s “observability” efforts range a number of disciplines. This document aims to compress the breadth of topics into a succinct (fitting on 1 printed page) set of best of breed write-ups that avoid any ties to vendors or implementation.

* [Cindy Sridharan’s Distributed Systems Observability](https://distributed-systems-observability-ebook.humio.com/): This is a free, 25-page eBook that does a great job summarizing the various tools and concepts available. You could also read [Monitoring and Observability](https://medium.com/@copyconstruct/monitoring-and-observability-8417d1952e1c) from Cindy’s blog for a shorter and less formal version of the same.
* [Google’s Site Reliability Engineering:](https://landing.google.com/sre/books/) This book has provided a lingua franca for discussions around the practices of reliability. It includes lots of great material like “Golden Signals”, error budgets, and more. You can [read it online](https://landing.google.com/sre/sre-book/toc/index.html) for free.
    * [Tom Wilkie’s RED Method](https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/) is a focused explanation of the SRE book’s Golden Signals and tends to resonate well with people.
    * [Brendan Gregg’s USE Method](http://www.brendangregg.com/usemethod.html) is an exceptional framework for measuring resource consumption. It takes more effort, but has fantastic results.
* Fred Hebert's *[Operable Software](https://ferd.ca/operable-software.html)* careens from observability to user experience and reminds us why this all so important.
* On specific use of some of the “pillars” of Observability:
    * [Prometheus’ Guide To Metric Types](https://prometheus.io/docs/concepts/metric_types/) covers the basics of metrics and their [ Metric and Label Naming](https://prometheus.io/docs/practices/naming/) reminds us that our metrics are also an interface for our engineers, and how we can standardize.
    * [Charity Majors’ Logs Vs Structured Events](https://charity.wtf/2019/02/05/logs-vs-structured-events/) describes how we can turn logging from a burden into a blessing.
* On the practice of measuring and using this tooling for the day-to-day:
    * [Coda Hale’s Metrics, Metrics, Everywhere](https://www.youtube.com/watch?v=czes-oa0yik) touches on everything from mental models to [OODA loops](https://en.wikipedia.org/wiki/OODA_loop) and generally explains how to measure and why you should. It's 7 years old and low quality, but is the best summary I've ever heard.
    * [Baron Schwartz’ What Metrics Should I Monitor](https://vimeo.com/77232632) helps to frame what to pay attention to in systems. It’s aimed at MySQL but can be applied to other systems.
    * [Kavya Joshi’s Applied Performance Theory](https://speakerdeck.com/kavya719/applied-performance-theory) is an excellent talk who’s title couldn’t be more apt. It gives quick and practical advice on using many of the formal topics from performance engineering.
    * John Allpaw's [Owning Attention (Considerations for Alert Design)](https://www.kitchensoap.com/2013/07/22/owning-attention-considerations-for-alert-design/) is a class in alerting for humans.
* On incidents:
    * [Gremlin’s How to Establish a High Severity Incident Management Program](https://www.gremlin.com/community/tutorials/how-to-establish-a-high-severity-incident-management-program/) provides a good example of how to think about and handle incidents.
    * [The STELLA Report](https://snafucatchers.github.io/) is the findings from the review of a few incidents and how engineers cope with them. It provides some strong food for thought for organizations and is a good gateway drug into the work of

# Periodic Reading

Enjoy mailing lists and such? Here are some good ones:

* _[Monitoring Weekly](https://monitoring.love/)_ is exactly what it sounds like.
* Thai Wood’s _[Resilience Roundup](https://resilienceroundup.com)_ summarizes papers in the resilience space and adds special insight from his combined tech and EMT background.
* Lex Neva’s _[SRE Weekly](https://sreweekly.com/)_ frequently hits topics in or adjacent to observability.

# My Contributions

As a long time advocate of observability I hope it's ok to add a few bits of my own. First, my definition:

> Observability is a quality of software, services, platforms, or products that allows operators to understand **how** systems are working. Observability makes investigating and diagnosing problems easier; the more observable a system, the more tools we've made available to diagnose problems or understand behavior. 

And some of my works:

* [My talks on observability](http://onemogin.com/observability/#speaking) across the years.
* [Structure and Layout in System Dashboard Design](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design.html) aims to condense the work of many other sources into practical advice for how to make great dashboards.
* The [CASE Method: Better Monitoring for Humans](http://onemogin.com/monitoring/case-method-better-monitoring-for-humans.html) aims to give a vendor agnostic, manual-if-needed process for controlling alert fatigue and measuring value.


# Honorable Mention

I’ve not read all of these yet, but seen them referenced enough to think they are worth a mention.

[Seeking SRE](http://shop.oreilly.com/product/0636920063964.do) is a supplement to Google’s SRE book, aimed at how the SRE role can be applied to organizations that aren’t Google.
