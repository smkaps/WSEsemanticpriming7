imageDir = 'C:\Documents\Research\WSEpriming\WSEsemanticpriming\letters\scrambled';
im_Set = imageSet(imageDir);
for k = 1 : im_Set.Count
  theImage = imread(im_set);
  croppedImage = imcrop(theImage,[0, 50, 200, 200]);
  baseFileName = sprintf('Image #%d.png', k);
  fullFileName = fullfile(imageDir, baseFileName);
  imwrite(croppedImage, fullFileName);
end