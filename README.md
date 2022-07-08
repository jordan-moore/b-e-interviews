# Technical Interview: Programming Assignment

## Problem Definition

A busy manufacturing plant has a list of assets from the plant waiting for inspection. The waitlist is created sequentially (e.g. assets are added in a fifo order) from the time the asset was reported via a call/digital entry of a customer reportee.  Once there is an availability, opperations calls each reportee to offer an inspection appointment for the asset in the order they were added to the waitlist. The staff member from opperations has noticed that she wastes a lot of time trying to find a reportee from the waitlist since they&#39;re often not available due to their schedule, asset isnt that important, don&#39;t pick up the phone, etc.  She would like to generate a better list that will increase her chances of finding a reportee in the first few calls.

## Interview Task

Given reportee demographics and behavioral data (see sample-data/reportee.json), create an algorithm that will process a set of historical reportee data and compute a score for each reportee that (1 as the lowest, 10 as the highest) that represents the chance of a reportee accepting the offer off the waitlist. Take into consideration that reportees who have little behavior data should be randomly added to the top list as to give them a chance to be selected. Expose an api that takes a manufacturing plant's location as input and returns an ordered list of 10 reportees who will most likely accept the inspection appointment offer.

## Weighting Categories

Demographic

- asset age  (weighted 10%)
- distance to technician (weighted 10%)

Behavior

- number of accepted inspections (weighted 30%)
- number of cancelled inspections (weighted 30%)
- reply time (how long it took for reportees to reply) (weighted 20%)

## Reportee Model

- ID
- assetAge (in years)
- location
  - Lat
  - long
- acceptedInspections (integer)
- canceledInspections (integer)
- averageReplyTime (integer, in seconds)

## Deliverables

The code should be written in Golang as a package that anyone can import and use. It should contain documentation and unit tests that show your understanding of the problem. Once you&#39;re finished, be prepared to present your code on a call, including a walkthrough of the code itself, its tests and to make calls to it via REST.


# Technical Interview: System Design Assignment

## Problem Definition

A manufacturing plant is looking to proactively maintain/fix IoT assets in the field that are streaming data via MQTT to an IoT Platform. They are hoping a new system/solution will leverage that platform to create alert events pertaining to the assets and ultimately empower maintanance workers with what assets they should inspect next and the relevant knowledge they will need to carry out their inspections.

## Interview Task

Design a system that handles prioratizing maintanance workers jobs from device events steamed to the cloud keep in mind the following. 

- Devices can have multiple data points/censors represented in their payloads.

- All data is in a JSON format.

- Alerts can be based of varying rules, checking equivalence, minimum, maximum or range thresholds and can be Errors or Warnings. 

- Devices going offline entirely should be considered

- Maintanance appointments are to be sent out as emails to maintanance users.

## Deliverables

Candidates are expected to present the various artifacts defining their system on a call to a board of team members over the course of 30-40 minutes. Architecture diagrams, sample database tables, data flow diagrams are encouraged. Questions may be asked during that time for clarification. This will be followed by 30-40 minutes of follow up questions that may delve deeper into parts of your system, ask you about how you would handle furhter requirements or new challenges, question your selction of certain architectural component choices vs alternatives.

This is primarily a system design interview, no real code is required, but code snipits or pseudo code is welcome for sections you'd like to flesh out or explore durring the interview.

