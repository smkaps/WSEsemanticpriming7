cd ../scrambled
currentDir = pwd

for a = 1:1393
   filename = ['scrambled' num2str(a,'%2d') '.jpg'];
   img = imread(filename);
   img2 = imcrop(img,[50 0 200 300]);
   fullfilename = fullfile(pwd, filename)
   imwrite(img2,fullfilename);
end