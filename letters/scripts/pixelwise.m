
%read image
test_image1 = imread('~/Desktop/letters/A.png');
test_image2 = imread('~/Desktop/letters/B.png');
test_image3 = imread('~/Desktop/letters/C.png');
test_image4 = imread('~/Desktop/letters/D.png');
test_image5 = imread('~/Desktop/letters/E.png');
test_image6 = imread('~/Desktop/letters/F.png');
test_image7 = imread('~/Desktop/letters/G.png');
test_image8 = imread('~/Desktop/letters/H.png');
test_image9 = imread('~/Desktop/letters/I.png');
test_image10 = imread('~/Desktop/letters/J.png');
test_image11 = imread('~/Desktop/letters/K.png');
test_image12 = imread('~/Desktop/letters/L.png');
test_image13 = imread('~/Desktop/letters/M.png');
test_image14 = imread('~/Desktop/letters/N.png');
test_image15 = imread('~/Desktop/letters/O.png');
test_image16 = imread('~/Desktop/letters/P.png');
test_image17 = imread('~/Desktop/letters/Q.png');
test_image18 = imread('~/Desktop/letters/R.png');
test_image19 = imread('~/Desktop/letters/S.png');
test_image20 = imread('~/Desktop/letters/T.png');
test_image21 = imread('~/Desktop/letters/U.png');
test_image22 = imread('~/Desktop/letters/V.png');
test_image23 = imread('~/Desktop/letters/W.png');
test_image24 = imread('~/Desktop/letters/X.png');
test_image25 = imread('~/Desktop/letters/Y.png');
test_image26 = imread('~/Desktop/letters/Z.png');
test_image27 = imread('~/Desktop/lowerletters/a.png');


%convert to gray scale
gray_img1 = rgb2gray(test_image1);
gray_img2 = rgb2gray(test_image2);

% threshold image to put all values greater than 125 to 255 and all values
% below 125 to 0
binary_image1 = test_img1 > 125;
binary_image2 = test_img2 > 125;

%binary image to size to allow pixel by pixel checking
[row, col] = size(binary_image1);

% initialize the counters for similar and different pixelse to zero
similar = 0;
different = 0;

%two loops to scan through all rows and columns of the image. 
for kk = 1 : row
    for yy = 1 : col
        %using if statement with isequal function to compare corresponding
        %pixel values and count them depending on the logical output of 
        %isequal 
        if isequal(binary_image1(kk,yy), binary_image2(kk,yy))
           similar = similar + 1;
        else
            different = different + 1;
        end
    end
end

% calculate the percentage difference between the images and print it
total_pixels = row*col;
difference_percentage = (different / total_pixels) * 100;
fprintf('%f%% difference between the compared images \n%d pixels being different to %d total pixels\n', difference_percentage, different, total_pixels )

% simple supbtraction of the two images
diff_image = binary_image1 - binary_image2;


%generate figure to show the original gray and corresponding binary images
%as well as the subtraction
figure
imshow(diff_image);
title('diff image');