
%read image
test_image1 = imread('~/Desktop/upperletters/A.png');
test_image2 = imread('~/Desktop/lowerletters/e.png');

%convert to gray scale
gray_img1 = rgb2gray(test_image1);
gray_img2 = rgb2gray(test_image2);

% threshold image to put all values greater than 125 to 255 and all values
% below 125 to 0
binary_image1 = gray_img1 > 125;
binary_image2 = gray_img2 > 125;

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
%figure
%imshow(diff_image);
%title('diff image');