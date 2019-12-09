# terminna
Modern dark personal website theme with a novelty terminal navigation. Terminal-like websites are commonly used as personal websites for programmers, but they usually all use the same bright colours and fonts. Terminna is an experiment into integrating the functionality and novelty of a command prompt into a modern website design. Users can navigate the website with UNIX commands including `cd` and `cat`. This design concept would work well with personal portfolio websites for programmers or as an extra touch on websites for computer science organizations and events

## Setup
To set up terminna and customise it for your use, clone the repository and install dependencies. 
```
git clone https://github.com/eightants/terminna.git
npm install
```
Then run the app with `npm start` and start customising it. 

## How the terminal prompt works
The main code for the prompt is in `terminal.js` where the component keeps track of what is being entered. The command is then split into two parts, an action (cd, cat, etc.) and a target (about, projects, etc.) and if statements perform the navigation. 
```
if (action === 'cd') {
    if (target.toLowerCase() === 'home') {
        target = '';
    }
    this.setState(() => ({
        navigate: '/' + target
    }));
} else if (action === 'cat') {
    this.setState(() => ({
        navigate: '/projects/' + target
    }));
}
```

> MIT License
> Anthony Teo, 2019