# mojo-demo

Steps to run the project:
1. Clone the master branch
2. Traverse to the cloned repo
3. Run "yarn install"
4. Run "expo start"

Feature/Functionalities implementes:
1. Bottom tab bar
2. Static Home screen except for the notice UI
3. Close notice UI
4. Open poll modal
5. Close poll modal
6. Vote on the poll
7. Skip the question
8. Redux implementation
9. Accessibility consideration

Improvements needed:
1. No action performed on the UI after skip question (API with null param is integrated but no action taken on UI)
2. The poll component is different than in Figma 
(I observed I was spending a lot of time creating the poll component, and instead decided to use available library to be time 
efficient and complete the functionality)
3. With changes in Poll component, the poll results rendering/ updating logic can also be optimized
4. The .ttf file "Sofia Pro" font used in figma was not available. Hence couldn't use that. 

Please refer short demo clip:
https://drive.google.com/file/d/1klf2jLrh4IluBVIohc-oTAmZNIboS77S/view?usp=sharing
