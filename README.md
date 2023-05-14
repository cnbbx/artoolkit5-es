# ARToolKit5-es 函数文档

## 概述

ARToolKit5-es 是一个基于 ARToolKit5 的 JavaScript 库，用于在网页和移动设备上实现增强现实应用程序。它提供了一组 API 以便于开发人员进行图像处理、标记检测、图像跟踪和姿态估计等操作。

```javascript
    import { ARToolkit, ARController } from "artoolkit5-es/index.js";
    ARController.initWithDimensions(640, 480, 'artoolkit5-es/camera/para.dat').then(controller => { ... });
```

## 函数列表

以下是 ARToolKit5 提供的函数列表：

### setup

```javascript
setup(camera_para, marker_size);
```

该函数用于设置相机参数和标记大小，并初始化 ARToolKit5 库。

- `camera_para` (String): 相机参数文件路径。
- `marker_size` (Number): 标记大小（以毫米为单位）。

### teardown

```javascript
teardown();
```

该函数用于释放 ARToolKit5 库的资源。

### setupAR2

```javascript
setupAR2(camera_para, marker_size);
```

该函数与 `setup` 函数类似，但使用 ARToolKit2 （而不是 ARToolKit1）标记。

- `camera_para` (String): 相机参数文件路径。
- `marker_size` (Number): 标记大小（以毫米为单位）。

### setLogLevel

```javascript
setLogLevel(level);
```

该函数用于设置日志级别。

- `level` (Number): 日志级别。

### getLogLevel

```javascript
getLogLevel();
```

该函数用于获取当前日志级别。

### setDebugMode

```javascript
setDebugMode(mode);
```

该函数用于设置调试模式。

- `mode` (Number): 调试模式。

### getDebugMode

```javascript
getDebugMode();
```

该函数用于获取当前调试模式。

### getProcessingImage

```javascript
getProcessingImage();
```

该函数用于获取最近处理的图像。

### setMarkerInfoDir

```javascript
setMarkerInfoDir(dir);
```

该函数用于设置标记信息目录。

- `dir` (String): 标记信息目录路径。

### setMarkerInfoVertex

```javascript
setMarkerInfoVertex(idx, vertex);
```

该函数用于设置标记顶点。

- `idx` (Number): 标记索引。
- `vertex` (Array): 标记顶点坐标数组。

### getTransMatSquare

```javascript
getTransMatSquare(marker_num);
```

该函数用于获取单个方形标记的变换矩阵。

- `marker_num` (Number): 标记编号。

### getTransMatSquareCont

```javascript
getTransMatSquareCont(marker_num);
```

该函数与 `getTransMatSquare` 函数类似，但返回连续的变换矩阵。

- `marker_num` (Number): 标记编号。

### getTransMatMultiSquare

```javascript
getTransMatMultiSquare(marker_num_array);
```

该函数用于获取多个方形标记的变换矩阵。

- `marker_num_array` (Array): 标记编号数组。

### getTransMatMultiSquareRobust

```javascript
getTransMatMultiSquareRobust(marker_num_array);
```

该函数与 `getTransMatMultiSquare` 函数类似，但使用稳健估计算法。

- `marker_num_array` (Array): 标记编号数组。

### getMultiMarkerNum

```javascript
getMultiMarkerNum();
```

该函数用于获取多标记数量。

### getMultiMarkerCount

```javascript
getMultiMarkerCount(marker_num);
```

该函数用于获取单个多标记的数量。

- `marker_num` (Number): 标记编号。

### detectMarker

```javascript
detectMarker(image_data, threshold);
```

该函数用于检测方形标记。

- `image_data` (ImageData): 图像数据。
- `threshold` (Number): 阈值。

### getMarkerNum

```javascript
getMarkerNum();
```

该函数用于获取方形标记数量。

### detectNFTMarker

```javascript
detectNFTMarker(image_data);
```

该函数用于检测 NFT 标记。

- `image_data` (ImageData): 图像数据。

### getNFTMarker

```javascript
getNFTMarker(marker_num);
```

该函数用于获取 NFT 标记信息。

- `marker_num` (Number): 标记编号。

### getMarker

```javascript
getMarker(marker_num);
```

该函数用于获取方形标记信息。

- `marker_num` (Number): 标记编号。

### getMultiEachMarker

```javascript
getMultiEachMarker(set_index);
```

该函数用于获取多个标记的信息。

- `set_index` (Number): 多标记索引。

### setProjectionNearPlane

```javascript
setProjectionNearPlane(near_plane);
```

该函数用于设置近平面距离。

- `near_plane` (Number): 近平面距离。

### getProjectionNearPlane

```javascript
getProjectionNearPlane();
```

该函数用于获取近平面距离。

### setProjectionFarPlane

```javascript
setProjectionFarPlane(far_plane);
```

该函数用于设置远平面距离。

- `far_plane` (Number): 远平面距离。

### getProjectionFarPlane

```javascript
getProjectionFarPlane();
```

该函数用于获取远平面距离。

### setThresholdMode

```javascript
setThresholdMode(threshold_mode);
```

该函数用于设置阈值模式。

- `threshold_mode` (Number): 阈值模式。

### getThresholdMode

```javascript
getThresholdMode();
```

该函数用于获取阈值模式。

### setThreshold

```javascript
setThreshold(threshold);
```

该函数用于设置阈值。

- `threshold` (Number): 阈值。

### getThreshold

```javascript
getThreshold();
```

该函数用于获取阈值。

### setPatternDetectionMode

```javascript
setPatternDetectionMode(detection_mode);
```

该函数用于设置图案检测模式。

- `detection_mode` (Number): 图案检测模式。

### getPatternDetectionMode

```javascript
getPatternDetectionMode();
```

该函数用于获取图案检测模式。

### setMatrixCodeType

```javascript
setMatrixCodeType(code_type);
```

该函数用于设置矩阵码类型。

- `code_type` (Number): 矩阵码类型。

### getMatrixCodeType

```javascript
getMatrixCodeType();
```

该函数用于获取矩阵码类型。

### setLabelingMode

```javascript
setLabelingMode(labeling_mode);
```

该函数用于设置标记模式。

- `labeling_mode` (Number): 标记模式。

### getLabelingMode

```javascript
getLabelingMode();
```

该函数用于获取标记模式。

### setPattRatio

```javascript
setPattRatio(ratio);
```

该函数用于设置图案比例。

- `ratio` (Number): 图案比例。

### getPattRatio

```javascript
getPattRatio();
```

该函数用于获取图案比例。

### setImageProcMode

```javascript
setImageProcMode(mode);
```

该函数用于设置图像处理模式。

- `mode` (Number): 图像处理模式。

### getImageProcMode

```javascript
getImageProcMode();
```

该函数用于获取图像处理模式。

## 结论

以上是 ARToolKit5-es 库提供的所有函数。这些函数使开发人员可以更轻松地构建基于视觉的增强现实应用程序。如需了解更多信息，请参阅各个函数的详细描述。