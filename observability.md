---
layout: page
title: Observability
permalink: /observability/
---

Observability is my specialty!

Through my career as a software engineer, manager and executive a common love of observability has been present.

[Observability](https://en.wikipedia.org/wiki/Observability) is more than monitoring and charts. **Observability is a collection of techniques and tools that aim to improve understanding of complex systems. Highly observable systems should have improved ergonomics for operators, allowing them to more quickly grasp the impact of changes and the contributors to incidents.** In other words, if you don't have sensors — metrics, logs, etc — that help you understand how your service is working then you can't tell if things are going wrong!

I've spent a lot of my time learning as much as I can about this subject as well as applying my knowledge to the things I work on. My earliest efforts were [a homegrown monitoring tool](http://onemogin.com/observability/tech/let-the-rithm-move-you.html) that I keep on GitHub for posterity.

## Open Source Work

* [Simple Sensor Format](https://github.com/stripe/veneur/tree/master/ssf) is a novel, new format for transmitting metrics, spans and other observability primitives.
* [Veneur](https://github.com/stripe/veneur) is a server implementation of [Datadog's](https://datadoghq.com) [DogStatsD](http://docs.datadoghq.com/guides/dogstatsd/) that brings efficient performance and the capability to approximate "global" histogram and timer percentiles using [Ted Dunning's t-digest](https://github.com/tdunning/t-digest) approximate histograms and sets using [HyperLogLogs](https://en.wikipedia.org/wiki/HyperLogLog).
* [Censorinus](https://github.com/gphat/censorinus) is a JVM — by way of Scala, but with no other dependencies — \*StatsD client with support for both [StatsD](https://github.com/etsy/statsd) and [DogStatsD](http://docs.datadoghq.com/guides/dogstatsd/).
* [datadog-scala](https://github.com/gphat/datadog-scala) is a Scala library for interacting with the [Datadog API](http://docs.datadoghq.com/api/).
* [Dozens of contributions](https://github.com/datadog/dd-agent/pulls?utf8=✓&q=is%3Apr%20author%3Agphat) to [Datadog's monitoring agent](https://github.com/datadog/dd-agent) and [Integrations SDK](https://github.com/DataDog/integrations-core).

## Visualization

* Perl charting library [Chart::Clicker](http://onemogin.com/chart-clicker/), with love to [Infinity Interactive](http://iinteractive.com) for being so supportive and [Stevan Little](https://twitter.com/stevanlittle) for being so inspirational.
* Hobby Javascript charting library [Clack](http://onemogin.com/clack/).

My frustration with charting tools of the day lead me to create my own: a marvelous Perl module called [Chart::Clicker](http://onemogin.com/chart-clicker/). Over years of development I honed my understanding of visualizations needed for performance and health data. Later endeavors are in a hobby Javascript library called [Clack](http://onemogin.com/clack/) meant to explore the best mix of performance and usability.

## Professional Work

After joining Twitter in 2012 I quickly found my calling in the Observability team. I [learned, maintained and created some marvelous stuff](https://blog.twitter.com/2013/observability-at-twitter) in that role. My next gig at [Keen IO](https://keen.io) was not specifically observability, but after the lessons learned at Twitter making sure that Keen's systems were as observable as possible was a focus of [my work](https://blog.keen.io/post-mortem-the-one-where-we-accidentally-ddosed-ourselves-d26fe43f5be5).

I joined Stripe in 2015 I created an Observability team and worked to change Stripe's culture such that observing our systems was a core concern. In that role I created [Veneur](https://github.com/stripe/veneur) which [Stripe used](https://stripe.com/blog/introducing-veneur-high-performance-and-global-aggregation-for-datadog) to power metrics and traces. I led the creation of an entirely new observability stack with minimal interruption, managed and changed vendors a few times, and contributed to large improvements in reliability and confidence at Stripe through both observability tooling and incident process.

In 2019 I joined [SignalFx](https://www.signalfx.com) as a Technical Director. My role is a mix of advocacy, customer engagement, and product improvement.

I'm often asked by investors to discuss my thoughts of new or existing monitoring products, and I enjoy speaking about these tools with others both to learn and provide my thoughts. I've also participated on customer advisory boards, representing my engineering teammates and learning challenges from vendors.

## Writing

* [Observability Crash Course](http://onemogin.com/observability/dashboards/observability-crash-course.html)
* [The CASE Method: Better Monitoring for Humans](http://onemogin.com/monitoring/case-method-better-monitoring-for-humans.html)
* A 5 part series on dashboard design:
  * [Structure and Layout](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design.html)
  * [Presentation and Accessibility](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design-p2.html)
  * [What Charts To Use](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design-p3.html)
  * [Context Improvement](http://onemogin.com/observability/dashboards/practitioners-guide-to-system-dashboard-design-p4.html)
  * [Naming and Organization](http://onemogin.com/observability/dashboards/dashboard-naming-and-organization.html)

## Speaking

### Conference Talks

I speak regularly and conferences across the country promoting observability and thoughtful, empathetic operations.

#### Monitorama 2016:

<iframe src="https://player.vimeo.com/video/173610034?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/173610034">Monitorama PDX 2016 - Cory Watson - Creating A Culture of Observability at Stripe</a> from <a href="https://vimeo.com/monitorama">Monitorama</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

[Here are the slides if you prefer to flip through them rather than listen to me talk](http://www.slideshare.net/CoryWatson8/building-a-culture-of-observability-at-stripe).

#### AWS Loft 2019:

I gave at talk at the New York AWS Loft office called "Demystifying Observability" for startups. It's a combination of beginner info and practical advice for how observability can help you even when you're just getting started.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n6v-P4p0QIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Monitorama 2019:

I had the pleasure of giving a 5 minute "vendor talk" at Monitorama PDX 2019. These talks are sometimes product pitches, but more often they are just a chance to speak about something important/interesting for the attendees and *maybe* mention your product. I decided to talk about how to think about observability tooling inspired by [John Allpaw's "An Open Letter to Monitoring/Metrics/Alerting Companies"](https://www.kitchensoap.com/2015/05/01/openlettertomonitoringproducts/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/TvS5conOsf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Podcasts

* In March of 2017 I [spoke with Software Engineering Daily](https://softwareengineeringdaily.com/2017/03/15/stripe-observability-with-cory-watson/) about my observability work at Stripe.
* In April of 2018 I [spoke with Software Engineering Daily again](https://softwareengineeringdaily.com/2018/04/23/stripe-observability-pipeline-with-cory-watson/) about observability pipelines.
* In April of 2019 I [spoke with Real World DevOps](https://www.realworlddevops.com/episodes/the-vendor-is-not-the-enemy-with-cory-watson) about going from a customer to a vendor and some observability stuff.

# Other

* Wrote [a guest post for Honeycomb talking about making people awesome with instrumentation](https://honeycomb.io/blog/2017/01/instrumentation-is-about-making-people-awesome/).
* Reviewing posts and early books in the observability space, such as a technical review of [Cindy Sridharan](https://medium.com/@copyconstruct)'s [Distributed Systems Observability](http://distributed-systems-observability-ebook.humio.com).

# Future

I hope to continue learning, teaching and pushing Observability in to the future. I feel that it is essential to the technical and social well-being of technology companies by keeping operations and teams in tip-top shape!
