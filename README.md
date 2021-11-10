<div align="center">
  <a href="https://philterms.org">
    <img width="320px" src="https://user-images.githubusercontent.com/4089393/141154344-eb911bf2-047b-42bf-b607-5f3564ea3e7a.png" /> 
  </a>

  <em align="center"> Find simple definitions </em>
</div>

<p align="center">
  <img src="https://img.shields.io/github/license/garrison0/philterms" />
  <img src="https://img.shields.io/netlify/a488a1a3-3de7-4bae-8cae-1c579ac42d03" />
  <img src="https://img.shields.io/github/contributors/garrison0/philterms" />
  <a href="#help-contribute"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
</p>

<h1 />

Table of contents
=================

<!--ts-->
   * [About us](#about-us)
   * [Help contribute](#help-contribute)
     * [Contribute term definitions](#contribute-term-definitions)
     * [Contribute code](#contribute-code)
   * [License](#license)
<!--te-->

#About us
=================

Philosophy Terms makes philosophical jargon easy to understand. Philosophy has hundreds of complicated terms. For each term, we explain:

* *what* the term means
* *why* we use the term
* *where* we use the term

For example, "mereology" means "the study of parts and wholes," but why does anybody care about that? What important issues reason about parts and wholes? A good definition answers these questions.

We follow the [Google Developer Documentation Style Guide](https://developers.google.com/style/) and we target a **high-school reading level**.

We aim to accompany the [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/).

Philosophy Terms is built with [Gridsome](https://gridsome.org/) and [Netlify CMS](https://www.netlifycms.org/).

#Help contribute
==================

Contributions are welcome!

Contribute term definitions 
----------------------

Thanks to Netlify CMS and [open authoring](https://www.netlifycms.org/docs/open-authoring/), all you need to contribute is a GitHub account: 

1. Visit [https://philterms.org/admin](https://philterms.org/admin)
2. Log in with your GitHub account
3. Authorize philterms
4. Click ‘Fork the repo’*
5. Click ‘New Posts’ to create a new post
6. Fill out all the fields to the left--to the right is a preview of your post
7. Change the status to ‘in review’ once you’re done

**this is so you can make changes without messing up the original website*

That’s it! Now we can review your changes.

If you're more familiar with git and wish to preview your changes, follow these steps:

1. Install the [Gridsome CLI](https://github.com/gridsome/gridsome#quick-start)
2. Clone your fork
3. Run ```npm install``` in the repository root
4. Run ```gridsome develop``` 
5. Visit ```http://localhost:8080``` to see your changes

Additionally, you can use the command line [vale](https://github.com/errata-ai/vale) linter to check your post for style errors:

1. Install [vale](https://docs.errata.ai/vale/install)
2. Run ```vale posts/(YOUR_POST_HERE)```

Philosophy Terms uses the [```Google``` and ```write-good```](https://github.com/errata-ai/styles) style guides. Posts do not have to have perfect style. Simplicity comes first.

To check all posts for style, run ```vale --ext=.md posts```.


Contribute code
-------------------

Feel free to request features, open pull requests, report bugs, and so on.

To learn more about contributing to open source, [watch these videos](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

#License
==================

Philosophy Terms is licensed under the [GNU General Public License v3.0](https://github.com/garrison0/philterms/blob/master/LICENSE).

