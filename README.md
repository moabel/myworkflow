# My Workflow
Code to speed up my workflow.
Creates content that changes on every page load and simulates user generated random content so you can care with what matters in the building time.
When coding only include this tag to your HTML and everything will work just like that.
*No dependencies

### Includes:
- Dummy image placeholder that just fit the size of any tag
- DOM change observer that reloads/adds images whenever necessary

### More to come:
[_] Dummy headlines and content generator
[_] Non default options(not reload images on resize, defined sizes)

## Just include this tag on your code
Every image must have a .img class.
```
<script src="https://cdn.jsdelivr.net/gh/SupahJay/myworkflow@master/core.js"></script>
```
 | Feature | Usage | Notes |
 | ------- | ----- | - |
 | Dummy Image generator | Give any `<img>` or any tag the .img tag | This will give a source(src) to `<img>`s but for any other type of tag it will add a background-image|
 | Dom change Observer | watch(nodeName [, callback]) | With no callbacks this function watches for dom changes to load more images when when a new tag appears|
