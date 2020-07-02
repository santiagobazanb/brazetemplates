# Template Names:

- ```4 Rows + 1/2 Image```
- ```5 Rows + Icon```
- ```5 Rows + Icon + Slider```
- ```5 Rows + 2/5 Image```
- ```5 Rows + 3/5 Image```


### Files included in folder(s)

- ```template.html``` - all the html content
- ```main.css``` - this is where all the important css lives. On the beginning of the file you can change colors, font sizes etc - it's easy accessible when using templates for new messages
- ```pagination.js``` - JavaScript for slider initialization
- ```slick-theme.css``` - Slider CSS
- ```slick.css``` - Slider CSS
- ```slick.js``` - Slider JS
- Example images, close icon



### HTML template notes

- All templates have almost the same HTML structure. Containers and elements have the same classes, only CSS adjustments are different
- All templates have same header and footer (some of the templates have an option for an additional link in the footer ```eg. 4Rows + 1/2 image```)
- All templates have sliders, but not all of them have more than 1 slide so the slider is invisible (I suggest not adding new slides because CSS might be affected with it). I added this because we might need it in the future and it will be faster to adjust the existing template for the slider.
- slides live under ```slick-container``` container
- each slide must have ```slick-slide number``` class, where ```number``` class is the order number of the slide. This ```number``` class is used in CSS after that.
- copy content lives under ```bottom-container``` container
- copy titles are made with ```<h3></h3>``` tag
- the copy text is under the ```message``` container - you can use ```<p>``` tag for new lines of text (with spacing). If class ```color``` is added to the ```<p>``` tag, that can add a different color and size to that sentence


### Notes

- do not create folders under the zipped folder
- all files have to be separated
