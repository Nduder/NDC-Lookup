
# NDC (National Drug Code) Tool
[Quick link](https://www.ndctool.com/)

Easy search and modification of the National Drug Codes for medicine and drugs using the OpenFDA API 

## Description

This tool is meant to make life a bit easier when grabbing medical NDC codes and modifying them whether that be for research or personal use, using the OpenFDA API. Essentially allows you to search for drugs and change the NDCs all at once to your liking. For example if you want all NDCs for tenofovir, search 'tenofovir', press the copy button, and you'll have all the NDCs copied to your clipboard to paste into your R (or any other language) code. No more needing to download the FDA excel files and manually search and grab each code. Furthermore you can alter the NDC to you liking, for example change all 'Tenofovir Disoproxil Fumarate' NDCs to add a 'TDF' at the start so you know what your always working with.

### Running NDC tool
[Just use it here](https://www.ndctool.com/)

If you want to run it yourself just run ```npm start``` and it will work (only needs internet for access to the OpenFDA API)

### How to Use

Should be very straightforward. Use the search bar to find whatever medicine/drugs you are looking for. Search results from OpenFDA will be displayed on a table automatically, and then you can modify all NDCs at once with the Prefix, Dash, and Suffix inputs. Use the Copy button to copy all results to your clipboard for use into your R code. Use the screen scaling button on the top if your computer / pad is having difficulty reading the table.


## FAQ

** Q:   Are you going to add *insert feature*? **
A:   If you have a feature in mind feel free to request it. Keep in mind though if you want to perform more complicated actions on the NDCs it might make more sense to use the full FDA NDC database file on their site [here](https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory) and write your own code for it.

** Q:   What about the 3rd segment for NDCs? **
A: 	  If it gets requested a lot then yes but haven't heard of anyone needing the 3rd segment (packaging) for their code.

** Q:   Will you release the other tools (user-form generator, ICD builder, etc) you made for your lab? **
A: Maybe, if I have time. Would have to refactor it for an open source version because don't want it too close to the original's due to security risks with backend/database. NDC tool was easy to port because it wasn't tied to any backend or databases.

## To Add
- Allow user to specify the delimiter (default is a comma)
- Remove select drugs from the search results
