Gradient highlighting of a line 

html 
<span class="highlight-yellow">Without having to quit your day job.</span>

Css
.highlight-yellow {
    border-radius: 0 0 1em 0;
    background-image: linear-gradient( -100deg, rgba(255, 224, 0, 0.2), rgba(255, 224, 0, 0.7) 95%, rgba(255, 224, 0, 0.1) );
}

--------------------------------------------------------------------------------------------------------------------------

Gradient colour of text

Html
<span class="gradient-pink">100,000 subscribers</span>

Css
.gradient-pink {
    background: -webkit-linear-gradient(135deg, #5A9AD3, #BC70FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-1 {
    background: -webkit-linear-gradient(135deg, #F56772 20%,#7280FF 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

--------------------------------------------------------------------------------------------------------------------------

Bg Gradient

