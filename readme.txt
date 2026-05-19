Hi! Thanks so much for commissioning me :)
Here's how to edit your website!

---

Changing Text:
Open index.html

To edit the header, locate this line:
<h1>Neo's Collection, A Glimpse of the World</h1>

and edit the text between <h1> and </h1>

To edit the bio, locate this line:
<p>My name is Neo!...</p>

and edit the text between <p> and </p>

Adding an Image:
First, make sure your image file is in the folder.
HTML websites cannot access files directly from your computer, so the image MUST be placed inside the project folder for the website to use it.

Now, locate the gallery ("<section class="gallery">")

Inside this section, you will see several lines that start with:
<img src="..."

To add a new image:
* Copy one of the existing image lines
* Paste it underneath
* Replace the information with your own

---

What Each Part Means:
Example:
<img src="photo.jpg" alt="A black cat sitting in a window" data-caption="Shot on Canon EOS R50 during sunset.">

src:
This connects the image file to your website.
Replace photo.jpg with the name of your image file.

alt:
This is the description of what is visually in the image.
This helps screen readers describe the image for accessibility.

Example:
"A black cat sitting in a window"

data-caption:
This is the comment underneath the photo when you click on the photo.

This can include:
* Camera information
* Location
* Thoughts about the image
* Anything you'd like viewers to read

Example:
"Shot on Canon EOS R50 during sunset."

---

Updating the Website on GitHub

In VS Code:
1. Open the Terminal tab in the top left corner
2. Click "New Terminal" (if you don't have one open already)

I recommend changing PowerShell to Command Prompt using the dropdown in the top right of the terminal window.

Type these commands EXACTLY:

"git add ."
then press Enter

then type:
"git commit -m "updated gallery""
then press Enter

then type:
"git push"
then press Enter

Your GitHub website should update automatically within 1–2 minutes.

---

If you have any issues, feel free to contact me!